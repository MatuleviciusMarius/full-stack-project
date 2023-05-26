import React from 'react';
import styles from './RulesSection.module.css';

export default function RulesSection() {
  return (
    <div className={styles.container}>
      <h1>TAISYKLĖS:</h1>
      <ol>
        <li>Dalyvavimas ”Norų išsipildymo” praktikos programoje, toliau Kelionė, yra savanoriškas.</li>
        <li>Dalyvauti gali visi asmenys nuo 18 metų.</li>
        <li>Kelionėje galima dalyvauti sumokėjus pilną kainą iki starto datos pradžios.</li>
        <li>Starto mėnesį galima pasirinkti atliekant registraciją.</li>
        <li>Kelionė startuoja mėnesio trečią dieną.</li>
        <li>Modulių pradžios mėnesio dienomis: 3, 6, 9, 12, 15, 18, 21, 24 ir 27.</li>
        <li>Prisijungti prie jau vykstančios Kelionės negalima.</li>
        <li>
          Prisiregistravus ir apmokėjus už dalyvavimą į Jūsų elektroninį paštą atsiunčiami prisijungimo duomenys. Prisijungiant prie šio
          tinklapio, pradedant nuo Jūsų pasirinktos starto pradžios, Jums bus suteikiama asmeninė prieiga prie einamojo modulio.
        </li>
        <li>
          Modulio tema, medžiaga ir užduotys pateikiamos modulio pirmąją dieną. Visas užduočių sąrašas ir modulių temos iš anksto
          nepateikiamos. Taip siekiama išlaikyti dalyvių smalsumą, intrigą, žaidybinę formą.
        </li>
        <li>
          Pirmojo modulio metu detaliai supažindinama su subtiliomis rekomendacijomis kaip lengvai ir paprastai įsisąmoninti žinias ir
          efektyviai atlikti užduotis.
        </li>
        <li>Apie užduoties atlikimą informuojama prisijungus prie einamojo modulio ir parašius apie tai.</li>
        <li>Apie užduoties atlikimą informuojama iki sekančio modulio pradžios.</li>
        <li>
          Neinformavus laiku apie užduoties atlikimą, dalyvis negali tęsti Kelionės, iškrenta iš srauto. Panaikinami prisijungimo duomenys.
          Pinigai negrąžinami. Dalyvavimas nemokamai neperkeliamas į sekantį srautą.
        </li>
        <li>Kelionės pradžios datą galima keisti likus mažiausiai dienai iki numatytos pradžios, tai derinant elektroniniu paštu.</li>
        <li>Jei dalyvis prasidėjusios Kelionės metu atsisako toliau dalyvauti, pinigai negrąžinami.</li>
        <li>Draudžiama kitų paslaugų ar prekių reklama bei prekyba šios programos erdvėse, online grupėse.</li>
        <li>Draudžiama bendrose šio projekto online grupėse bendrauti su dalyviais pašalinėmis temomis.</li>
        <li>
          Jei dalyvis grupiniuose pokalbiuose ar susirašinėjimuose elgiasi nepagarbiai, menkina, žemina ar kritikuoja kitą dalyvį ar
          Kelionę, naudoja necenzūrinius žodžius, negatyviai atsiliepia apie dalyvaujančius asmenis ar Kelionę, ar kitaip trukdo Kelionės
          dalyviams ir organizatoriams, yra šalinamas. Pinigai negrąžinami.
        </li>
        <li>Kiekvienas dalyvis pats atsako už save, savo norus ir veiksmus, ir pretenzijos nepriimamos.</li>
        <li>
          Jūsų asmeniniai duomenys, kuriuos pildote registracijos formoje, naudojami tik įmonės veikloje. Gerbiame ir saugome Jūsų
          privatumą.
        </li>
        <li>Organizatoriai pasilieka teisę keisti taisykles ir apie tai informuoti internetiniame tinklapyje.</li>
        <li>
          Dalyviai, apmokėdami už dalyvavimą Kelionėje, patvirtina, kad susipažino su šioje svetainėje pateikta informacija ir sutinka su
          dalyvavimo sąlygomis bei taisyklėmis. Prieš apmokėjimą būtina pažymėti varnele, kad sutinkate su Taisyklėmis.
        </li>
      </ol>
    </div>
  );
}
