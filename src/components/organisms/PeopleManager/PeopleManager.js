import React, { useState, useEffect, useMemo } from "react";
import styles from "./PeopleManager.module.css";
import { Button, Select, Table } from "@mantine/core";
import { formatDate } from "@/utils/util";
import axios from "axios";
import Loading from "@/components/atoms/Loading/Loading";

export default function PeopleManager({ groups }) {
  const [groupData, setGroupData] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState({});
  const [peopleListData, setPeopleListData] = useState([]);
  const [selectedPersonId, setSelectedPersonId] = useState({});
  const [selectedPerson, setSelectedPerson] = useState({});
  const [selectedGroupToChangeId, setSelectedGroupToChangeId] = useState();
  const [isLoadingChangeGroup, setIsLoadingChangeGroup] = useState(false);

  const hardcodedSelects = [
    {
      value: "all",
      label: "Visi Žmonės",
    },
    {
      value: "noGroup",
      label: "Visi be grupių",
    },
  ];

  const allPeopleMapped = useMemo(() => {
    const people = groups.reduce((acc, item) => {
      if (item.users && Array.isArray(item.users)) {
        return [...acc, ...item.users.map((user) => ({ value: user._id, label: user.name }))];
      } else {
        return acc;
      }
    }, []);
    return people.sort((a, b) => a.label.localeCompare(b.label));
  }, [groups]);

  const allPeople = useMemo(() => {
    const people = groups.reduce((acc, item) => {
      if (item.users && Array.isArray(item.users)) {
        return [...acc, ...item.users];
      } else {
        return acc;
      }
    }, []);
    return people.sort((a, b) => a.name.localeCompare(b.name));
  }, [groups]);

  const allPeopleMappedWithNoGroups = useMemo(() => {
    const people = allPeople.reduce(
      (acc, item) => {
        if (item.users && Array.isArray(item.users)) {
          return [...acc, ...item.map((user) => ({ value: user._id, label: user.name }))];
        } else {
          return acc;
        }
      },
      [allPeopleMapped]
    );

    const peopleWithoutGroup = people.filter((person) => person.group);
    return peopleWithoutGroup.sort((a, b) => a.label.localeCompare(b.label));
  });

  useEffect(() => {
    setGroupData(
      groups.map((x) => ({
        value: x._id,
        label: `${x.name} ${formatDate(x.startDate)}`,
      }))
    );
  }, [groups]);

  function handleGroupChange(value) {
    if (value === "all") {
      setPeopleListData(allPeopleMapped);
    } else if (value === "noGroup") {
      setPeopleListData(allPeopleMappedWithNoGroups);
    } else {
      const group = groups.find((gr) => gr._id === value);
      if (group.users) {
        setPeopleListData(
          group.users.map((person) => ({
            value: person._id,
            label: person.name,
          }))
        );
      }
    }
    setSelectedGroupId(value);
  }

  function handleSelectPerson(value) {
    setSelectedPersonId(value);
    setSelectedPerson(allPeople.find((p) => p._id === value));
  }

  async function handleChangeGroupButton() {
    setIsLoadingChangeGroup(true);
    try {
      if (selectedPerson.group) {
        await axios.delete(
          `/api/group/removeUser?userid=${selectedPerson._id}&groupid=${selectedPerson.group}`
        );
        await axios.post("/api/group/addUser", {
          userId: selectedPerson._id,
          groupId: selectedGroupToChangeId,
        });
      } else {
        await axios.post("/api/group/addUser", {
          userId: selectedPerson._id,
          groupId: selectedGroupToChangeId,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingChangeGroup(false);
  }

  return (
    <div className={styles.container}>
      <Select
        searchable
        nothingFound="Nieko nerasta"
        label="Pasirikti grupe kurios zmones rodyti"
        placeholder="Pick one"
        data={[...hardcodedSelects, ...groupData]}
        onChange={handleGroupChange}
        value={selectedGroupId}
      />
      <Select
        searchable
        nothingFound="Nieko nerasta"
        label="Pasirinkti zmogu is grupes"
        placeholder="Pick one"
        data={peopleListData}
        value={selectedPersonId}
        onChange={handleSelectPerson}
      />
      <div>
        <h3>Informacija</h3>
        <Table withColumnBorders>
          <thead>
            <tr>
              <th>ID:</th>
              <th>Email</th>
              <th>Vardas</th>
              <th>grupė</th>
              <th>Pabaigti moduliai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedPerson._id}</td>
              <td>{selectedPerson.email}</td>
              <td>{selectedPerson.name}</td>
              <td>{selectedPerson.group}</td>
              <td>
                {selectedPerson.finishedModules && selectedPerson.finishedModules.length !== 0
                  ? selectedPerson.finishedModules.join(", ")
                  : ""}
              </td>
            </tr>
          </tbody>
        </Table>
        <div>
          {selectedPerson._id && (
            <>
              <Select
                searchable
                nothingFound="Nieko nerasta"
                label="Pridėti arba pakeisti pasirinkto žmogaus grupę"
                placeholder="Pick one"
                data={groupData}
                onChange={setSelectedGroupToChangeId}
                value={selectedGroupToChangeId}
              />
              {isLoadingChangeGroup ? (
                <Loading />
              ) : (
                <Button onClick={handleChangeGroupButton} color="red">
                  Keisti Grupę
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}