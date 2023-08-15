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
        <ul className={styles["flex-container"]}>
          <li>
            <Link href={"/rules"}>Taisyklės</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
