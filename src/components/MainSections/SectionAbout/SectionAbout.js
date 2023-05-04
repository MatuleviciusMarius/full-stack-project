import React from 'react';
import Card from '@/components/molecules/Card/Card';
import styles from './SectionAbout.module.css';

export default function SectionAbout() {
  return (
    <section className={styles.container} id="about">
      <h1>
        Uncover and meet <br /> customer needs.
      </h1>
      <p>
        Most teams seek to understand customer needs, yet aren't able to hire a <br /> dedicated researcher. Now there's another option.
      </p>
      <div className={styles['flex-container']}>
        <Card
          title={'Founders'}
          text={
            'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          link={'#'}
        />
        <Card
          title={'Product teams'}
          text={
            'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          link={'#'}
        />
      </div>
    </section>
  );
}
