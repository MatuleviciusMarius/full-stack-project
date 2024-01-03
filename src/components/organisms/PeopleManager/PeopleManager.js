import React, { useState, useEffect, useMemo } from "react";
import styles from "./PeopleManager.module.css";
import { Button, Select, Table } from "@mantine/core";
import { formatDate } from "@/utils/util";
import axios from "axios";
import Loading from "@/components/atoms/Loading/Loading";

export default function PeopleManager({ groups = [], people = [] }) {
  const [groupData, setGroupData] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState({});
  const [peopleListData, setPeopleListData] = useState([]);
  const [selectedPersonId, setSelectedPersonId] = useState({});
  const [selectedPerson, setSelectedPerson] = useState({});
  const [selectedGroupToChangeId, setSelectedGroupToChangeId] = useState();
  const [isLoadingChangeGroup, setIsLoadingChangeGroup] = useState(false);
  const [orders, setOrders] = useState([]);

  const hardcodedSelects = [
    {
      value: "all",
      label: "Visi Žmonės",
    },
    {
      value: "noGroup",
      label: "Visi be grupių",
    },
    {
      value: "notRegistered",
      label: "Visi nusipirkę, bet neprisiregistravę",
    },
  ];

  useEffect(() => {
    setGroupData(
      groups.map((x) => ({
        value: x._id,
        label: `${x.name} ${formatDate(x.startDate)}`,
      }))
    );
  }, [groups]);

  useEffect(() => {
    const getOrdersWithEmails = async () => {
      const o = await axios.get("/api/user/userPayNoGroup");
      setOrders(o.data.orders);
    };
    getOrdersWithEmails();
  }, []);

  const allPeopleMapped = useMemo(() => {
    return people.map((person) => ({
      label: person.name,
      value: person._id,
    }));
  }, [people]);

  const peoplePayedWithNoGroup = useMemo(() => {
    const ordersCopy = [...orders];
    console.log(orders);
    console.log(people);
    const filtered = ordersCopy.filter(
      (order) => !!people.findIndex((person) => person.email === order.customer_email)
    );
    return filtered.map((order) => ({
      label: order.customer_email,
      value: order.customer_id,
    }));
  }, [orders, people]);

  const allPeopleWithNoGroupMapped = useMemo(() => {
    return people
      .filter((person) => !person.group)
      .map((person) => ({
        label: person.name,
        value: person._id,
      }));
  }, [people]);

  function handleGroupChange(value) {
    if (value === "all") {
      setPeopleListData(allPeopleMapped);
    } else if (value === "noGroup") {
      setPeopleListData(allPeopleWithNoGroupMapped);
    } else if (value === "notRegistered") {
      setPeopleListData(peoplePayedWithNoGroup);
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
    setSelectedPerson(people.find((p) => p._id === value));
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
              <th>Telefonas</th>
              <th>Vardas</th>
              <th>grupė</th>
              <th>Pabaigti moduliai</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedPerson._id}</td>
              <td>{selectedPerson.email}</td>
              <td>{selectedPerson.phone}</td>
              <td>{selectedPerson.name}</td>
              <td>{groups.find((gr) => gr._id === selectedPerson.group)?.name}</td>
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
