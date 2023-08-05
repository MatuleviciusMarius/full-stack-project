import React, { useState } from "react";
import User from "../User/User";
import { DateTimePicker } from "@mantine/dates";
import { TextInput, NumberInput, Button, Table } from "@mantine/core";
import axios from "axios";

export default function Group({ startDate, name, users, id, openLessons, isStarted }) {
  const [showUsers, setShowUsers] = useState(false);
  const [nameState, setNameState] = useState(name);
  const [startDateState, setStartDateState] = useState(startDate);
  const [openLessonsState, setOpenLessonsState] = useState(openLessons);
  const [isGroupStarted, setIsStarted] = useState(isStarted);

  async function handleUpdate() {
    try {
      axios.post("/api/group/updateGroup", {
        groupId: id,
        name: nameState,
        openLessons: openLessonsState,
        startDate: startDateState,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function startGroupHandler() {
    try {
      await axios.get(`/api/group/toggleStart?groupId=${id}`);
      setIsStarted((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <tr>
        <td>
          <TextInput value={nameState} onChange={(e) => setNameState(e.target.value)} />
        </td>
        <td>
          <DateTimePicker value={startDateState} onChange={(date) => setStartDateState(date)} />
        </td>
        <td>
          <NumberInput
            value={openLessonsState}
            onChange={(number) => setOpenLessonsState(number)}
          />
        </td>
        <td>
          <Button onClick={() => setShowUsers((prev) => !prev)} color="green" radius="md">
            Rodyti narius ↓
          </Button>
        </td>
        <td>
          <Button color="indigo" radius="md" onClick={handleUpdate}>
            Atnaujinti
          </Button>
        </td>
        <td>
          <Button onClick={startGroupHandler} color={isGroupStarted ? "red" : "green"}>
            {isGroupStarted ? "Stabdyti grupę" : "Startuoti grupę"}
          </Button>
        </td>
      </tr>
      <tr>
        <td colSpan={6}>
          {showUsers && (
            <Table>
              <tr>
                <th>ID.</th>
                <th>Vardas</th>
                <th>El. Pastas</th>
                <th>Registracijos laikas</th>
                <th>Pabaigtos Pamokos</th>
                <th>Pašalinti iš grupės</th>
              </tr>
              {users.map((user) => {
                return <User user={user} groupId={id} />;
              })}
            </Table>
          )}
        </td>
      </tr>
    </>
  );
}
