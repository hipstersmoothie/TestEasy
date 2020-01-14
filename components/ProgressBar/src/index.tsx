import React from 'react';
import styles from './ProgressBar.css';

interface ProgressBarProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div className={styles.progressBar}>
      This is a ProgressBar component {props.value}
    </div>
  );
};

export default ProgressBar;
