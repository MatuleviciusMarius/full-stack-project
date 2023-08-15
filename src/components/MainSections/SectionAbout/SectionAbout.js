import React from "react";
import Card from "@/components/molecules/Card/Card";
import styles from "./SectionAbout.module.css";

export default function SectionAbout() {
  return (
    <section className={styles.container} id="about">
      <h1>Norų išsipildymas</h1>
      <p>Holistinės praktinės žinios ir užduotys norų išsipildymui</p>
      <div className={styles["flex-container"]}>
        <Card
          className={styles.card}
          title={"APIE KELIONĘ"}
          text={`Norų išsipildymas, tai pasiūlymas,
          kuris leidžia kiekvienai iš mūsų tapti 
          savo gyvenimo architekte ir dovanoja 
          galią savo norus paversti realybe
          `}
          link={"/details/about"}
        />
        <Card
          className={styles.card}
          title={"PRAKTINIS GIDAS"}
          text={`Skirtas kiekvienam žmogui, 
          kurio pagrindinis poreikis yra norų, 
          svajonių ir troškimų išsipildymas, 
          ir kiekvienam, kuris trokšta 
          apčiuopiamų rezultatų.
          `}
          link={"/details/practicalGuidance"}
        />
      </div>
    </section>
  );
}
