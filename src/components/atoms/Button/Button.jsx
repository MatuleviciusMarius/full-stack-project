import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, action, disabled }) {
  return (
    <button disabled={disabled} onClick={action} className={styles.button}>
      {text}
    </button>
  );
}
