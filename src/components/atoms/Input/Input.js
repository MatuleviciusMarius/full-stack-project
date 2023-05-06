import React from 'react';
import styles from './Input.module.css';

export default function Input({ id, text, value, setValue, type, invalidText, isValid }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
      <input className={styles.input} type={type} id={id} value={value} onChange={setValue} />
      {!isValid && <p className={styles['invalid-text']}>{invalidText}</p>}
    </div>
  );
}
