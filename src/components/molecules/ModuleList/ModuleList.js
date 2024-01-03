import LinkToModule from "@/components/atoms/LinkToModule/LinkToModule";
import React from "react";
import styles from "./ModuleList.module.css";

export default function ModuleList({ openModules = 0, userInfo, groupId }) {
  const links = [];
  for (let i = 1; i < openModules + 1; i++) {
    links.push(
      <LinkToModule
        moduleId={i}
        key={i}
        userInfo={userInfo}
        color={"#6164FE"}
        isFinished={userInfo.finishedModules.includes(i)}
        groupId={groupId}
      />
    );
  }

  if (openModules === 0) {
    return (
      <div className={styles.textContainer}>
        <h1>Sveikinu Tave su artėjančia Norų išsipildymo diena!</h1>
        <p>
          Starto dieną prisijunk prie mokymai.mydreamworld.lt svetainės naudodama asmeninį
          slaptažodį, kurį sukūrei registracijos metu ir Tau atsivers pirmieji vartai į Norų
          išsipildymo pirmąjį modulį.
        </p>
        <p>
          Apie artėjančią Tavo starto dieną į Norų išsipildymo kelionę būsi informuojama per
          WhatsApp programėlę. Visi pranešimai bus siunčiami į telefoną, kurį nurodei registracijos
          metu.
        </p>
        <hr />
        <p className={styles.center}>
          Neprivalai būti patenkinta mažais dalykais, kai <br />
          esi pajėgi naudotis ir mėgautis didesniais
        </p>
        <hr className={styles.biggerHr} />
        <p className={styles.center}>Laimingos kelionės!</p>
      </div>
    );
  }

  return <div className={styles.container}>{links}</div>;
}
