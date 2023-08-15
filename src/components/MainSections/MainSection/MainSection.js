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
          TIKRAS gyvenimas <br />
          būna tuomet, <br />
          kai ateina tai ko <br />
          TIKRAI NORIME ir tai <br />
          ateina NORIMU metu
        </h1>
        <ul>
          <li>
            <a href="#about">Apie Kelionę</a>
          </li>
          |
          <li>
            <a href="#about">Praktinis gidas</a>
          </li>
          |
          <li>
            <a href="#aboutMe">Apie mane</a>
          </li>
        </ul>
        <Button text={"Registracija"} action={() => router.push("/register")} />
      </div>
    </section>
  );
}
