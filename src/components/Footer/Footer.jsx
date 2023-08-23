import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          El. Paštas: <a href="mailto:pagalba@mydreamworld.lt">pagalba@mydreamworld.lt</a>
          <br />
          Tel: +<a href="tel:+37061280062">37061280062</a>
        </p>
        <Link className={styles.rules} href={"/rules"}>
          TAISYKLĖS
        </Link>
      </div>
    </footer>
  );
}
