import React from "react";
import styles from "./Success.module.css";
import Button from "@/components/atoms/Button/Button";
import { useRouter } from "next/router";

export default function Success({ text }) {
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
          <circle cx="55.5" cy="55.5" r="55.5" fill="#D7F4BF" />
        </svg>
        <svg
          className={styles.tick}
          width="49"
          height="38"
          viewBox="0 0 49 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.0835 37.5513L48.6222 1.99072L46.3778 0.000123871L16.847 33.2967L2.04393 19.5187L0 21.7146L14.8558 35.5418L14.8391 35.5607L15.6237 36.2566L16.129 36.7268L16.1403 36.7147L17.0835 37.5513Z"
            fill="#53723B"
          />
        </svg>
      </div>
      <h2 className={styles.successText}>{text}</h2>
      <Button text={"PRISIJUNGTI"} filled action={() => router.push("/login")} />
    </div>
  );
}
