import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

export default function Card({ title, text, link, photo, id }) {
  const style = {
    padding: photo ? 0 : "65px 63px 58px 85px",
  };
  return (
    <div className={styles.card} style={style} id={id}>
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
