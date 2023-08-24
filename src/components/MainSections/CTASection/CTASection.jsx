import React from "react";
import styles from "./CTASection.module.css";
import Button from "@/components/atoms/Button/Button";
import { useRouter } from "next/router";

export default function CTASection() {
  const router = useRouter();
  return (
    <section className={styles.section}>
      <h2 className={styles.ctaText}>PRISIJUNK PRIE MŪSŲ</h2>
      <p className={styles.ctaBodyText}>
        Neprivalai būti patenkinta mažais dalykais, kai <br /> esi pajėgi naudotis ir mėgautis
        didesniais
      </p>
      <div className={styles["button-container"]}>
        <Button text={"PRISIJUNGTI"} action={() => router.push("/login")} />
        <Button text={"REGISTRUOTIS"} action={() => router.push("/register")} filled />
      </div>
    </section>
  );
}
