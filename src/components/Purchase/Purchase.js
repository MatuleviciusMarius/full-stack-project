import React, { useState, useEffect } from "react";
import GroupPicker from "./GroupPicker/GroupPicker";
import { Button } from "@mantine/core";
import axios from "axios";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/util";

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
    <div>
      <GroupPicker groups={groups} handleChange={setSelectedGroupId} />
      <Button
        onClick={handlePayButton}
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
      >
        Susimokėti
      </Button>
    </div>
  );
}
