import React from 'react';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles['text-container']}>
        <h2>Prisijunk prie mūsų</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptatum eveniet dolorum inventore quia saepe? Deleniti,
          suscipit officia accusamus voluptatem dolorem sapiente temporibus exercitationem necessitatibus, in optio, impedit dolore
          consequatur.
        </p>
      </div>
      <div className={styles['button-container']}>
        <button>Prisijungti</button>
        <button>Registruotis</button>
      </div>
    </section>
  );
}
