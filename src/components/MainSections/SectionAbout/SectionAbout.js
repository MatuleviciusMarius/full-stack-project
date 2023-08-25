import React from "react";
import Card from "@/components/molecules/Card/Card";
import styles from "./SectionAbout.module.css";

export default function SectionAbout() {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.topHeading}>NORŲ IŠSIPILDYMAS</h1>
      <p>Holistinės praktinės žinios ir užduotys norų išsipildymui</p>
      <div className={styles["flex-container"]}>
        <Card
          title={"APIE KELIONĘ"}
          text={`Norų išsipildymas, tai ypatingas pasiūlymas,
          kuris atveria galimybę kiekvienai iš mūsų tapti 
          savo gyvenimo architekte ir dovanoja 
          galią savo norus ir troškimus paversti tikrove
          `}
          link={"/details/about"}
        />
        <Card
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
      <h1 className={styles.middleHeading}>NORIU TIKRO GYVENIMO</h1>
      <div className={styles["flex-container"]}>
        <Card
          title={"APIE MANE"}
          text={`Aš esu Jūratė Lajauskaitė
          Asmeninio augimo trenerė
          Holistinė koučerė
          Mano siūloma praktika
          žmonių gyvenimus verčia 
          sėkmingesniais, laimingesniais
          `}
          link={"/details/aboutme"}
        />
        <Card photo={"/images/profilis-min.jpg"} />
      </div>
    </section>
  );
}
