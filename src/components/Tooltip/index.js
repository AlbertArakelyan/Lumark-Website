import { cloneElement, useId } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Shows `content` above the wrapped element on hover and keyboard focus. Pass `block` to fill the parent's width.
const Tooltip = ({ content, block = false, children }) => {
  const id = useId();

  if (!content) {
    return children;
  }

  return (
    <span className={clsx(styles.wrapper, block && styles.block)}>
      {cloneElement(children, { 'aria-describedby': id })}
      <span id={id} role="tooltip" className={styles.tooltip}>
        {content}
      </span>
    </span>
  );
};

export default Tooltip;
