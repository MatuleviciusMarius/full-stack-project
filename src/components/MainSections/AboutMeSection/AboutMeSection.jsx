import React from "react";
import styles from "./AboutMeSection.module.css";
import Card from "@/components/molecules/Card/Card";

export default function AboutMeSection() {
  return (
    <section className={styles.section} id="aboutMe">
      <div className={styles["text-container"]}>
        <h2 className={styles.heading}>Apie mane</h2>
        <p>Noriu tikro gyvenimo</p>
      </div>
      <div className={styles.container}>
        <Card
          title={"APIE MANE"}
          text={`Aš esu Jūratė Lajauskaitė \nAsmeninio augimo trenerė \nHolistinė koučerė \nMano siūloma praktika \nžmonių gyvenimus verčia \nsėkmingesniais, laimingesniais`}
          link={"/details/aboutme"}
        />
        <Card photo={"/images/profilis-min.jpeg"} />
      </div>
    </section>
  );
}
