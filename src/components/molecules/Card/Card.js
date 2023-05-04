import React from 'react';
import styles from './Card.module.css';

export default function Card({ title, text, link, photo }) {
  return (
    <div className={styles.card}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {link && <a href={link}>MORE</a>}
      {photo && <img src={photo} />}
    </div>
  );
}
