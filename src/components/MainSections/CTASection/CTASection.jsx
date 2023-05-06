import React from 'react';
import styles from './CTASection.module.css';
import Button from '@/components/atoms/Button/Button';
import { useRouter } from 'next/router';

export default function CTASection() {
  const router = useRouter();
  return (
    <section className={styles.section}>
      <div className={styles['text-container']}>
        <h2>Prisijunk prie mūsų</h2>
        <p>Neprivalai būti patenkinta mažais dalykais, kai esi pajėgi naudotis ir mėgautis didesniais</p>
      </div>
      <div className={styles['button-container']}>
        <Button text={'Registracija'} action={() => router.push('/register')} />
        <Button text={'Prisijungti'} action={() => router.push('/login')} />
      </div>
    </section>
  );
}
