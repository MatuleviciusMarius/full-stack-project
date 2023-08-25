import React from "react";
import { useRouter } from "next/router";
import styles from "./Failure.module.css";
import Button from "../Button/Button";

export default function Failure({ text }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <svg
          width="111"
          height="111"
          viewBox="0 0 111 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="55.5" cy="55.5" r="55.5" fill="#F4BFBF" />
        </svg>
        <svg
          className={styles.x}
          width="46"
          height="45"
          viewBox="0 0 46 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.6215 24.0475L43.1217 44.5477L45.243 42.4264L24.7428 21.9262L44.5477 2.12133L42.4264 1.28746e-05L22.6215 19.8049L2.81663 0L0.695312 2.12132L20.5002 21.9262L0 42.4264L2.12132 44.5477L22.6215 24.0475Z"
            fill="#723B3B"
          />
        </svg>
      </div>
      <h2 className={styles.successText}>{text}</h2>
      <Button text={"GRIŽTI"} filled action={() => router.push("/login")} />
    </div>
  );
}
