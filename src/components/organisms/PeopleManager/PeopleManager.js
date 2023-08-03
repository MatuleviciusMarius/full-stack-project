import React, { useState, useEffect } from "react";
import styles from "./PeopleManager.module.css";
import { Select, Table } from "@mantine/core";
import { formatDate } from "@/utils/util";

export default function PeopleManager({ groups }) {
  console.log(groups);
  const [groupData, setGroupData] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState({});
  const [peopleListData, setPeopleListData] = useState([]);
  const [selectedPersonId, setSelectedPersonId] = useState({});
  const [selectedPerson, setSelectedPerson] = useState({});

  const selectedGroup = groups.find((g) => g._id === selectedGroupId);

  useEffect(() => {
    setGroupData(
      groups.map((x) => ({
        value: x._id,
        label: `${x.name} ${formatDate(x.startDate)}`,
      }))
    );
  }, [groups]);

  function handleGroupChange(value) {
    const group = groups.find((gr) => gr._id === value);
    setSelectedGroupId(value);

    if (group.users) {
      setPeopleListData(
        group.users.map((person) => ({
          value: person._id,
          label: person.name,
        }))
      );
    }
  }

  function handleSelectPerson(value) {
    setSelectedPersonId(value);
    console.log(selectedGroup);
    setSelectedPerson(selectedGroup.users.find((p) => p._id === value));
  }

  return (
    <div className={styles.container}>
      <Select
        label="Pasirikti grupe kurios zmones rodyti"
        placeholder="Pick one"
        data={groupData}
        onChange={handleGroupChange}
        value={selectedGroupId}
      />
      <Select
        label="Pasirinkti zmogu is grupes"
        placeholder="Pick one"
        data={peopleListData}
        value={selectedPersonId}
        onChange={handleSelectPerson}
      />
      <div>
        <h3>Informacija</h3>
        <Table>
          <tbody>
            <tr>
              <td>ID:</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
