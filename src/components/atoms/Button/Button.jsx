import React from 'react';
import styles from './Button.module.css';

export default function Button({ text, action }) {
  return (
    <button onClick={action} className={styles.button}>
      {text}
    </button>
  );
}
