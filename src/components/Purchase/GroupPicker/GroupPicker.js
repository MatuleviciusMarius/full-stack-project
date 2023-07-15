import React from "react";
import { Select } from "@mantine/core";

export default function GroupPicker({ groups, handleChange, value }) {
  return (
    groups.length && (
      <Select
        label="Grupės:"
        placeholder="Pasrinkite grupę"
        data={groups}
        onChange={handleChange}
        value={value || groups[0].value}
      />
    )
  );
}
