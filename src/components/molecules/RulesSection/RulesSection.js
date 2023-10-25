import React from "react";
import styles from "./RulesSection.module.css";

export default function RulesSection() {
  return (
    <div className={styles.container}>
      <h1>TAISYKLĖS:</h1>
      <ol>
        <li>
          Dalyvavimas &rdquo;Norų išsipildymo&rdquo; praktikos programoje, toliau Kelionė, yra
          savanoriškas.
        </li>
        <li>Dalyvauti gali kiekvienas žmogus.</li>
        <li>Kelionėje galima dalyvauti apmokėjus programą iki pasirinkto starto datos pradžios.</li>
        <li>
          Mokėjimams vykdyti mes naudojame &ldquo;Stripe&rdquo;, kuris yra atsakingas už saugias
          transakcijas. Stripe yra pasaulyje gerai žinoma įmonė, turinti PCI level 1 saugumo
          standartą mokėjimų srityje.
        </li>
        <li>
          Registracija šiame tinklapyje yra būtina. Jos metu Jūs susikuriate asmenį slaptažodį.
        </li>
        <li>
          Prisijungus su asmeniniu slaptažodžiu Jūs galite pasirinkti Kelionės datą ir apmokėti.
        </li>
        <li>
          Sėkmingai apmokėjus, į Jūsų registracijos metu nurodytą elektroninio pašto adresą,
          atsiunčiamas patvirtinimas.
        </li>
        <li>
          Starto dieną prisijungiant prie interneto svetainės www.mydreamworld.lt, Jums bus
          suteikiama asmeninė prieiga prie 1 Modulio.
        </li>
        <li>
          Kelionė susideda iš 9 modulių.
          <li>Modulių pradžios mėnesio dienomis: 3, 6, 9, 12, 15, 18, 21, 24 ir 27.</li>
        </li>
        <li>Prisijungti prie jau vykstančios Kelionės nėra galimybės.</li>
        <li>
          Modulio tema, medžiaga ir užduotys pateikiamos modulio pirmąją dieną. Visas užduočių
          sąrašas ir modulių temos iš anksto nepateikiamos. Taip siekiama išlaikyti Kelionės loginę
          seką, dalyvių smalsumą, intrigą, žaidybinę formą.
        </li>
        <li>
          Apie užduočių atlikimą būtina informuoti einamojo modulio skiltyje iki sekančio modulio
          pradžios, pažymint varnele.
        </li>
        <li>
          Neinformavus laiku apie užduočių atlikimą, dalyvė nebegali tęsti Kelionės, iškrenta iš
          srauto, stabdoma prieiga prie modulių ir dalyvavimas privačioje grupėje. Pinigai
          negrąžinami. Dalyvavimas nemokamai neperkeliamas į kitą srautą.
        </li>
        <li>
          Kelionės pradžios datą/grupę galima keisti likus mažiausiai trims dienoms iki starto, tai
          derinant elektroniniu paštu{" "}
          <a href="mailto:pagalba@mydreamworld.lt">pagalba@mydreamworld.lt</a>.
        </li>
        <li>
          Jei dalyvė prasidėjusios Kelionės metu atsisako toliau dalyvauti, pinigai negrąžinami.
        </li>
        <li>
          Kiekviena dalyvė pati atsako už save, savo norus ir veiksmus, pretenzijos nepriimamos.
        </li>
        <li>
          Draudžiama kitų paslaugų ar prekių reklama bei prekyba šios programos erdvėse, privačiose
          grupėse.
        </li>
        <li>
          Jūsų asmeniniai duomenys, kuriuos pildote registracijos formoje, naudojami tik įmonės
          veikloje. Gerbiame ir saugome Jūsų privatumą.
        </li>
        <li>
          Kelionės metu būtina naudotis WhatsApp ir Facebook. Aktyvi komunikacija privačioje grupėje
          vyksta per WhatsApp. Organizatoriai prašo iš anksto atsisiųsti ir pasiruošti naudojimui
          šias programėles.
        </li>
        <li>
          Organizatoriai pasilieka teisę keisti taisykles ir apie tai informuoti šiame
          internetiniame tinklapyje.
        </li>
        <li>
          Dalyvė, apmokėdama už dalyvavimą Kelionėje, patvirtina, kad susipažino su šioje svetainėje
          pateikta informacija ir sutinka su dalyvavimo sąlygomis bei taisyklėmis.
        </li>
      </ol>
    </div>
  );
}
