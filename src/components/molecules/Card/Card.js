import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

export default function Card({ title, text, link, photo }) {
  return (
    <div className={styles.card}>
      {title && <h2>{title}</h2>}
      {text && <p className={styles["preserve-line-breaks"]}>{text}</p>}
      {link && <Link href={link}>Daugiau</Link>}
      {photo && <img src={photo} />}
      {/* test */}
    </div>
  );
}
