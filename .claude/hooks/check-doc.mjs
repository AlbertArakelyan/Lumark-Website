// PostToolUse hook for Edit/Write on docs pages. Catches the two mistakes that
// don't fail `yarn build` but break the site silently:
//   1. `:::info Title` admonitions, which render as literal text on this
//      Docusaurus version (must be `:::info[Title]`).
//   2. A doc page missing from the manual sidebar in sidebars.js.
// Exit code 2 sends stderr back to Claude so it can fix the problem.

import { readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const readStdin = () => {
  try {
    return JSON.parse(readFileSync(0, 'utf8'));
  } catch {
    return null;
  }
};

const input = readStdin();
const filePath = input?.tool_input?.file_path;
const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

if (!filePath || !/\.mdx?$/.test(filePath)) {
  process.exit(0);
}

const docsDir = join(projectDir, 'docs');
const relativePath = relative(docsDir, filePath);

if (relativePath.startsWith('..') || !existsSync(filePath)) {
  process.exit(0);
}

const problems = [];
const lines = readFileSync(filePath, 'utf8').split(/\r?\n/);
let inFence = false;

lines.forEach((line, index) => {
  if (/^\s*(```|~~~)/.test(line)) {
    inFence = !inFence;
  }

  if (!inFence && /^\s*:::[a-z]+\s+\S/.test(line)) {
    problems.push(`line ${index + 1}: "${line.trim()}" uses a space-separated admonition title, which renders as plain text. Use :::type[Title] instead.`);
  }
});

const docId = relativePath.split(sep).join('/').replace(/\.mdx?$/, '');
const isPartial = docId.split('/').some((part) => part.startsWith('_'));
const sidebarsPath = join(projectDir, 'sidebars.js');

if (!isPartial && existsSync(sidebarsPath)) {
  const sidebars = readFileSync(sidebarsPath, 'utf8');

  if (!sidebars.includes(`'${docId}'`) && !sidebars.includes(`"${docId}"`)) {
    problems.push(`doc id "${docId}" is not referenced in sidebars.js. The sidebar is manual, so the page won't appear in navigation until it is added.`);
  }
}

if (problems.length) {
  console.error(`${relativePath}:\n- ${problems.join('\n- ')}`);
  process.exit(2);
}
