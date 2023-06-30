import React from 'react';
import axios from 'axios';

export default function User({ user, groupId }) {
  function formatDateString(startDate) {
    const date = new Date(startDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}/${month}/${day}`;

    return formattedDate;
  }

  function removeFromGroup() {
    try {
      axios.delete('/api/group/removeUser' + `?userid=${user._id}&groupid=${groupId}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{formatDateString(user.createdAt)}</td>
      <td>
        <button onClick={removeFromGroup}>Pašalinti</button>
      </td>
    </tr>
  );
}
