import React, { useState, useEffect } from "react";
import GroupPicker from "./GroupPicker/GroupPicker";
import axios from "axios";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/util";
import styles from "./Purchase.module.css";
import Loading from "../atoms/Loading/Loading";
import Button from "../atoms/Button/Button";

export default function Purchase({ userId }) {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState("");

  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/group/getAll")
      .then((response) => {
        const notStartedGroups = response.data.groups.filter((group) => !group.isStarted);
        const groupsArr = notStartedGroups.map((group) => {
          return {
            value: group._id,
            label: `${group.name}-${formatDate(group.startDate)}`,
          };
        });
        setGroups(groupsArr);
      })
      .catch((err) => console.log(err));
  }, []);

  function handlePayButton() {
    router.push(`/paymentPreview?groupId=${selectedGroupId}&userId=${userId}`);
  }

  return (
    <div className={styles.container}>
      {groups.length ? (
        <>
          <div className={styles.textContainer}>
            <p>
              Laimingos būname tuomet, <br />
              kai ateina tai ko tikrai norime <br />
              ir tai ateina norimu metu
            </p>
            <br />
            <p>
              Neprivalai būti patenkinta mažais dalykais, kai esi pajėgi naudotis ir mėgautis
              didesniais
            </p>
            <br />
          </div>
          <hr className={styles.split} />
          <div className={styles.textContainer}>
            <br />
            <p>
              Norint dalyvauti Norų išsipildymo Kelionėje, pasirink pradžios datą ir atlik
              apmokėjimą.
            </p>
            <p className={styles.biggerMargin}>9 moduliai per 27 dienas</p>
            <p className={styles.priceText}>Kaina 126 eur.</p>
            <span className={styles.margin}>
              <GroupPicker
                groups={groups}
                handleChange={setSelectedGroupId}
                value={selectedGroupId}
              />
            </span>
            <Button
              text={"EITI Į APMOKĖJIMĄ"}
              action={handlePayButton}
              disabled={!selectedGroupId}
              filled
            />
          </div>
        </>
      ) : (
        <div className="center-text">
          <Loading />
        </div>
      )}
    </div>
  );
}
