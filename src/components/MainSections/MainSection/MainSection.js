import React from 'react';
import styles from './MainSection.module.css';
import Button from '@/components/atoms/Button/Button';
import { useRouter } from 'next/router';

export default function MainSection() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>
          TIKRAS <br /> gyvenimas būna tuomet, kai ateina tai ko NORIME ir tai ateina NORIMU momentu
        </h1>
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
        <Button text={'Registracija'} action={() => router.push('/register')} />
      </div>
    </section>
  );
}
