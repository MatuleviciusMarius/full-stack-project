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
      <img
        onClick={handleLogoClick}
        className={styles.logo}
        src="/images/logo-min.png"
        alt="LOGO"
      />
      <ul className={styles.navigation}>
        <Link href="/register">Registracija</Link>
        <Link href="/login">Prisijungti</Link>
      </ul>
    </header>
  );
}
