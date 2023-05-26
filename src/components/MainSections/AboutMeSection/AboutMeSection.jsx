import React from 'react';
import styles from './AboutMeSection.module.css';
import Card from '@/components/molecules/Card/Card';

export default function AboutMeSection() {
  return (
    <section className={styles.section}>
      <div className={styles['text-container']}>
        <h2 className={styles.heading}>Apie mane</h2>
        <p>Trokštu tik tikro gyvenimo</p>
      </div>
      <div className={styles.container}>
        <Card
          title={'Apie mane'}
          text={`Aš esu Jūratė Lajauskaitė
          Asmeninio augimo trenerė
          Holistinė koučerė
          Mano siūlomas praktinis vedlys 
          žmonių gyvenimus verčia 
          sėkmingesniais, laimingesniais.
          `}
          link={'/details/aboutme'}
        />
        <Card photo={'https://sourcesofinsight.com/wp-content/uploads/2007/12/Yes-Person.jpg'} />
      </div>
    </section>
  );
}
