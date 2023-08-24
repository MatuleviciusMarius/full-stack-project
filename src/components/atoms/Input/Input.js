import React from "react";
import styles from "./Input.module.css";

export default function Input({
  id,
  text,
  value,
  setValue,
  type,
  invalidText,
  isValid,
  placeholderText,
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
      <br />
      <input
        className={styles.input}
        type={type}
        id={id}
        value={value}
        onChange={setValue}
        placeholder={placeholderText}
      />

      <p style={{ color: !isValid ? "#ff7384" : "transparent" }} className={styles["invalid-text"]}>
        {invalidText}
      </p>
    </div>
  );
}
