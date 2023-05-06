import React from 'react';
import Card from '@/components/molecules/Card/Card';
import styles from './SectionAbout.module.css';

export default function SectionAbout() {
  return (
    <section className={styles.container} id="about">
      <h1>Norų išsipildymas</h1>
      <p>Holistinės praktinės žinios ir užduotys norų išsipildymui</p>
      <div className={styles['flex-container']}>
        <Card
          title={'Apie'}
          text={
            'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          link={'#'}
        />
        <Card
          title={'Praktikumas'}
          text={
            'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          link={'#'}
        />
      </div>
    </section>
  );
}
