import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  function handleLogoClick() {
    router.push("/");
  }

  return (
    <header className={styles.header}>
      <div>
        <img onClick={handleLogoClick} className={styles.logo} src="/images/logo.svg" alt="LOGO" />
        <span className={styles.brandText}>MY DREAM WORLD</span>
      </div>
      <ul className={styles.navigation}>
        <a>PRAKTINIS GIDAS</a>
        <a>APIE MANE</a>
        <Link href="/login">PRISIJUNGTI</Link>
      </ul>
    </header>
  );
}
