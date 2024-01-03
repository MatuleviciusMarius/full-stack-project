import React, { useState, useEffect } from "react";
import GroupPicker from "./GroupPicker/GroupPicker";
import axios from "axios";
import { getDayFromDate } from "@/utils/util";
import styles from "./Purchase.module.css";
import Loading from "../atoms/Loading/Loading";
import Button from "../atoms/Button/Button";

export default function Purchase({ userId }) {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/group/getAll")
      .then((response) => {
        const notStartedGroups = response.data.groups.filter((group) => !group.isStarted);
        const groupsArr = notStartedGroups.map((group) => {
          return {
            value: group._id,
            label: `${group.name} ${getDayFromDate(group.startDate)} d.`,
          };
        });
        setGroups(groupsArr);
      })
      .catch((err) => console.log(err));
  }, []);

  async function addToGroup() {
    setIsLoading(true);
    await axios.post("/api/group/addUser", {
      userId,
      groupId: selectedGroupId,
    });
    setIsLoading(false);
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      {groups.length ? (
        <>
          <div className={styles.textContainer}>
            <p>
              Laimingos būname tuomet, <br />
              kai ateina tai, ko tikrai norime <br />
              ir tai ateina norimu metu
            </p>
            <p className={styles.marginTop}>
              Neprivalai būti patenkinta mažais dalykais, kai esi pajėgi naudotis ir mėgautis
              didesniais
            </p>
            <br />
          </div>
          <hr className={styles.split} />
          <div className={styles.textContainer}>
            <br />
            <p>
              Norint dalyvauti Norų išsipildymo Kelionėje, pasirink pradžios datą ir patvirtinkite
            </p>
            {/* <p className={styles.biggerMargin}>9 moduliai per 27 dienas</p>
            <p className={styles.priceText}>Kaina 126 eur.</p> */}
            <span className={styles.margin}>
              <GroupPicker
                groups={groups}
                handleChange={setSelectedGroupId}
                value={selectedGroupId}
              />
            </span>
            {/* <form action="/api/checkout_sessions" method="POST" className={styles.form}>
              <input type="hidden" name="userId" value={userId} />
              <input type="hidden" name="groupId" value={selectedGroupId} /> */}
            {isLoading ? (
              <div className="center-text">
                <Loading />
              </div>
            ) : (
              <Button
                text={"PATVIRTINTI"}
                disabled={!selectedGroupId}
                filled
                role={"link"}
                action={addToGroup}
              />
            )}
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
