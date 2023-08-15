import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles["flex-container"]}>
          <li>
            <Link href={"/rules"}>Taisyklės</Link>
          </li>
          <li>
            <Link href={"#"}>Privatumo Politika</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
