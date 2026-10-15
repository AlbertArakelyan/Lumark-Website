---
title: Markdown syntax
description: The Markdown that Lumark's preview renders, from basic formatting to tables, task lists and footnotes.
---

# Markdown syntax

Lumark's preview renders [GitHub-flavoured Markdown](https://github.github.com/gfm/). This page lists everything it supports, with the syntax to type in the editor. Switch to **Split** mode to see each example rendered as you type it.

## Headings

Use `#` symbols. More symbols mean a smaller heading.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Text formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
`Inline code`
```

## Paragraphs and line breaks

Leave a blank line between blocks of text to start a new paragraph.

```markdown
This is the first paragraph.

This is the second paragraph.
```

For a line break inside a paragraph, end the line with a backslash (or two spaces).

```markdown
First line\
Second line
```

## Blockquotes

Use `>`. Add more `>` to nest.

```markdown
> This is a blockquote.
>
> > This is a nested blockquote.
```

## Lists

### Unordered

```markdown
- Item one
- Item two
  - Sub-item A
  - Sub-item B
- Item three
```

### Ordered

```markdown
1. First item
2. Second item
   1. Sub-item one
   2. Sub-item two
3. Third item
```

### Task lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task to do
```

## Links

```markdown
[Visit Lumark](https://www.lumark.app/)

[Lumark website](https://www.lumark.app/ "Go to Lumark")

[Lumark][lumark-ref]

[lumark-ref]: https://www.lumark.app/
```

Plain URLs such as `https://www.lumark.app` are turned into links automatically. You can also wrap one in angle brackets:

```markdown
<https://www.lumark.app/>
```

## Images

```markdown
![Lumark logo](https://www.lumark.app/img/logo.png)

![Lumark logo](https://www.lumark.app/img/logo.png "Lumark app logo")

[![Lumark logo](https://www.lumark.app/img/logo.png)](https://www.lumark.app/)
```

:::note
Images load from a URL today. Adding images stored alongside your notes is on the [roadmap](https://github.com/AlbertArakelyan/Lumark#roadmap).
:::

## Code

### Inline

```markdown
Use the `print()` function in Python.
```

### Code blocks

Wrap code in triple backticks and add a language name for syntax highlighting.

````markdown
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```
````

````markdown
```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet('World'));
```
````

## Tables

```markdown
| Feature | Syntax         |
| ------- | -------------- |
| Bold    | `**text**`     |
| Italic  | `*text*`       |
| Link    | `[title](url)` |
```

Control column alignment with colons in the separator row:

```markdown
| Left | Center | Right |
| :--- | :----: | ----: |
| a    |   b    |     c |
```

## Horizontal rules

Three or more dashes, asterisks or underscores on their own line.

```markdown
---
***
___
```

## Footnotes

```markdown
Here is a statement with a footnote.[^1]

[^1]: This is the footnote content.
```

## Collapsible sections

Raw HTML is rendered too, which makes `<details>` work:

```markdown
<details>
<summary>Click to expand</summary>

Hidden content goes here.

</details>
```

## Escaping characters

Put a backslash before a character to show it literally.

```markdown
\*This is not italic\*
\# This is not a heading
\[This is not a link\]
```

## Quick reference

| Element | Syntax |
| --- | --- |
| Heading | `# H1` `## H2` `### H3` |
| Bold | `**bold**` |
| Italic | `*italic*` |
| Strikethrough | `~~text~~` |
| Blockquote | `> quote` |
| Ordered list | `1. item` |
| Unordered list | `- item` |
| Task list | `- [x] done` / `- [ ] todo` |
| Inline code | `` `code` `` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| Horizontal rule | `---` |
| Footnote | `text[^1]` / `[^1]: note` |

:::info[Not supported yet]
Definition lists, emoji shortcodes (like `:smile:`) and Mermaid diagrams aren't rendered by the preview. Mermaid support is on the roadmap.
:::
