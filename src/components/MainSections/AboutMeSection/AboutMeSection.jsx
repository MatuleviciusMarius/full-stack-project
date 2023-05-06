import React from 'react';
import styles from './AboutMeSection.module.css';
import Card from '@/components/molecules/Card/Card';

export default function AboutMeSection() {
  return (
    <section className={styles.section}>
      <div className={styles['text-container']}>
        <h2 className={styles.heading}>Apie Jūratę</h2>
        <p>Holistinė koučerė</p>
      </div>
      <div className={styles.container}>
        <Card
          title={'Apie'}
          text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione excepturi ipsum temporibus totam nam consectetur.'}
          link={'#'}
        />
        <Card photo={'https://sourcesofinsight.com/wp-content/uploads/2007/12/Yes-Person.jpg'} />
      </div>
    </section>
  );
}
