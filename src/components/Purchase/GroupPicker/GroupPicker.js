import React from "react";
import { Select } from "@mantine/core";

export default function GroupPicker({ groups, handleChange }) {
  return (
    <Select label="Grupės" placeholder="Pasrinkite grupę" data={groups} onChange={handleChange} />
  );
}
