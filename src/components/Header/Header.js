import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header({ isDashboard = false }) {
  const router = useRouter();
  const pathname = router.pathname;
  function handleLogoClick() {
    router.push("/");
  }

  function handleSignOut() {
    signOut({ callbackUrl: "/" });
  }

  return (
    <header className={styles.header}>
      <div className={styles.brandContainer}>
        <img onClick={handleLogoClick} className={styles.logo} src="/images/logo.svg" alt="LOGO" />
        <span className={styles.brandText}>MY DREAM WORLD</span>
      </div>
      <ul className={styles.navigation}>
        {isDashboard ? (
          <button className={styles.signOut} onClick={handleSignOut}>
            ATSIJUNGTI
          </button>
        ) : pathname.includes("register") ? (
          <Link href="/">PRISIJUNGTI</Link>
        ) : (
          <Link href="/register">REGISTRACIJA</Link>
        )}
      </ul>
    </header>
  );
}
