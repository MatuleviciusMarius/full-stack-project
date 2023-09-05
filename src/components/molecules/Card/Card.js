import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

export default function Card({ title, text, link, photo, id }) {
  return (
    <div className={`${styles.card} ${photo ? "" : styles.padding}`} id={id}>
      {photo ? (
        <img src={photo} />
      ) : (
        <>
          {title && <h2 className={styles.title}>{title}</h2>}
          {text && <p className={styles.bodyText}>{text}</p>}
          {link && (
            <Link className={styles.link} href={link}>
              DAUGIAU
            </Link>
          )}
        </>
      )}
    </div>
  );
}
