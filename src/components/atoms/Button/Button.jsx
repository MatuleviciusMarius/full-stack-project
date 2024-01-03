import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, action, disabled, filled = false, type, role }) {
  const style = {
    backgroundColor: filled ? "#9d467e" : "transparent",
    color: filled ? "#FFF" : "#9d467e",
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
