import React from 'react';
import styles from './MainSection.module.css';

export default function MainSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>We help businesses grow by creating high-quality websites</h1>
        <ul>
          <li>
            <a href="#about">Apie</a>
          </li>
          |
          <li>
            <a href="">Kazkas</a>
          </li>
          |
          <li>
            <a href="">Kazkas</a>
          </li>
          |
          <li>
            <a href="">Kazkas</a>
          </li>
        </ul>
        <button>Registruotis</button>
      </div>
    </section>
  );
}
