import React from "react";
import { Select } from "@mantine/core";

export default function GroupPicker({ groups, handleChange, value }) {
  return (
    groups.length && (
      <Select placeholder="Pasrinkite grupę" data={groups} onChange={handleChange} value={value} />
    )
  );
}
