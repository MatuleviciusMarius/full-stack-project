import React, { useState, useEffect } from "react";
import { Box } from "@mantine/core";
import { useRouter } from "next/router";
import CheckBox from "../CheckBox/CheckBox";
import axios from "axios";

export default function LinkToModule({ moduleId, userInfo, color, isFinished = false }) {
  const router = useRouter();
  const [isModuleCompleted, setIsModuleCompleted] = useState(isFinished);

  function handleClick(e) {
    router.push(`/dashboard/moduleView/${moduleId}`);
  }

  function onChange(e) {
    if (e.currentTarget.checked) {
      axios.post(`/api/user/module?moduleId=${moduleId}&userId=${userInfo._id}`);
      setIsModuleCompleted(true);
    } else {
      axios.delete(`/api/user/module?moduleId=${moduleId}&userId=${userInfo._id}`);
      setIsModuleCompleted(false);
    }
  }

  return (
    <Box
      onClick={handleClick}
      sx={(theme) => ({
        background: "linear-gradient(to right, #536BFE, #E64EFA)",
        padding: theme.spacing.xl,
        borderRadius: "60px",
        cursor: "pointer",
        width: "70%",
        color: "#333333",
        margin: "1rem auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
        },
        "@media screen and (max-width: 500px)": {
          justifyContent: "space-between",
        },
      })}
    >
      <span className="white large-text">Modulis {moduleId}</span>
      <CheckBox onChange={onChange} isModuleCompleted={isModuleCompleted} />
    </Box>
  );
}
