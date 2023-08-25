import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, action, disabled, filled = false, type, role }) {
  const style = {
    backgroundColor: filled ? "#574141" : "transparent",
    color: filled ? "#FFF" : "#000",
    fontWeight: filled ? 700 : 400,
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={action}
      className={styles.button}
      type={type}
      role={role}
    >
      {text}
    </button>
  );
}
