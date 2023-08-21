import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          El. Paštas: pagalba@mydreamworld.lt
          <br />
          Tel: +37061280062
        </p>
        <Link href={"/rules"}>Taisyklės</Link>
      </div>
    </footer>
  );
}
