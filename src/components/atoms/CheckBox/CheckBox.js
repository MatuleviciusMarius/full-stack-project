import React from "react";
import { Checkbox } from "@mantine/core";

export default function CheckBox({ onChange, isModuleCompleted }) {
  return (
    <Checkbox
      sx={(theme) => ({
        position: "absolute",
        right: "1rem",
      })}
      labelPosition="left"
      label={<span className="white">Atlikta</span>}
      color="#566AFE"
      size={"md"}
      onClick={(e) => e.stopPropagation()}
      onChange={onChange}
      checked={isModuleCompleted}
    />
  );
}
