import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          El. Paštas: pagalba@mydreamworld.lt
          <br />
          Tel: +37061280062
        </p>
        <Link href={"/rules"}>TAISYKLĖS</Link>
      </div>
    </footer>
  );
}
