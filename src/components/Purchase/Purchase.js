import React, { useState, useEffect } from "react";
import GroupPicker from "./GroupPicker/GroupPicker";
import { Button } from "@mantine/core";
import axios from "axios";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/util";
import styles from "./Purchase.module.css";
import Loading from "../atoms/Loading/Loading";

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
          <div className="center-text">
            <p>
              Laimingos būname tuomet, <br />
              kai ateina tai ko tikrai norime <br />
              ir tai ateina norimu metu
            </p>
            <p>
              Neprivalai būti patenkinta mažais dalykais, <br /> kai esi pajėgi naudotis ir mėgautis
              didesniais
            </p>
            <p>~~~***~~~</p>
            <p>
              Nori dalyvauti Norų išsipildymo Kelionėje, <br /> pasirink starto datą ir apmokėk
            </p>
            <p>9 moduliai per 27 dienas</p>
            <p className="price-text">Kaina 126 eurai</p>
          </div>
          <span className={styles.margin}>
            <GroupPicker
              groups={groups}
              handleChange={setSelectedGroupId}
              value={selectedGroupId}
            />
          </span>
          <Button
            mx={"md"}
            onClick={handlePayButton}
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            disabled={!selectedGroupId}
            className={styles.button}
          >
            Mokėti
          </Button>
        </>
      ) : (
        <div className="center-text">
          <Loading />
        </div>
      )}
    </div>
  );
}
