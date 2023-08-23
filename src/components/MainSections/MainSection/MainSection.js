import React from "react";
import styles from "./MainSection.module.css";
import Button from "@/components/atoms/Button/Button";
import { useRouter } from "next/router";

export default function MainSection() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>
          TIKRAS gyvenimas būna tuomet, <br />
          kai ateina tai, ko TIKRAI NORIME <br />
          ir tai ateina NORIMU metu
        </h1>
        <div className={styles.buttonContainer}>
          <Button text={"REGISTRUOTIS"} action={() => router.push("/register")} filled />
          <Button text={"APIE KELIONĘ"} action={() => router.push("/register")} />
        </div>
      </div>
    </section>
  );
}
