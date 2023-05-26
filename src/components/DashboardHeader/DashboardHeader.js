import React from 'react';
import styles from './DashboardHeader.module.css';
import { signOut } from 'next-auth/react';

export default function DashboardHeader() {
  function handleSignOut() {
    signOut({ callbackUrl: '/' });
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>My App</div>
      <button className={styles.header__signout} onClick={handleSignOut}>
        Atsijungti
      </button>
    </div>
  );
}
