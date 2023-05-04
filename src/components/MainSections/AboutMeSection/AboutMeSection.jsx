import React from 'react';
import styles from './AboutMeSection.module.css';
import Card from '@/components/molecules/Card/Card';

export default function AboutMeSection() {
  return (
    <section className={styles.section}>
      <div className={styles['text-container']}>
        <h2 className={styles.heading}>Apie Mane</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora cumque nam quos quam mollitia exercitationem officiis,
          illo doloremque ipsum laborum ut omnis fugiat, quo in sit pariatur. Obcaecati, vero?
        </p>
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
