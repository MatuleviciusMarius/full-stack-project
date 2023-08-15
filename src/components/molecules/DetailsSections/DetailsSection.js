import React from "react";
import styles from "./DetailsSection.module.css";

export default function DetailsSection({ text }) {
  return <div className={styles.container}>{text}</div>;
}
