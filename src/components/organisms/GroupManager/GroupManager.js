import Group from '@/components/molecules/Group/Group';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Table, TextInput, Button } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

export default function GroupManager() {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    axios.get('/api/group/getAll').then((response) => {
      setGroups(response.data.groups);
    });
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    try {
      const body = {
        startDate,
        name: groupName,
      };

      axios.post('/api/group/create', body);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Sukurti grupę</h1>
      <Box maw={320} mx="auto">
        <TextInput placeholder="Grupės Pavadinimas" label={'Grupės pavadinimas:'} onChange={(e) => setGroupName(e.target.value)} />
        <DateTimePicker label={'Starto data'} placeholder="Pasirinkti starto laiką" />
        <Button onClick={submitHandler}>Sukurti!</Button>
      </Box>
      <h1>Grupių sąrašas</h1>
      <Table>
        <thead>
          <tr>
            <th>Pavadinimas</th>
            <th>Starto data</th>
            <th>Atidarytos pamokos</th>
            <th>Rodyti Narius</th>
            <th>Atnaujinti</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <Group
              key={group._id}
              id={group._id}
              startDate={new Date(group.startDate)}
              name={group.name}
              users={group.users}
              openLessons={group.openLessons}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
