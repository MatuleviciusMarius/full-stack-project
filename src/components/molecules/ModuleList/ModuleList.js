import LinkToModule from "@/components/atoms/LinkToModule/LinkToModule";
import React from "react";

export default function ModuleList({ openModules = 0, userInfo }) {
  const links = [];
  for (let i = 1; i < openModules + 1; i++) {
    links.push(
      <LinkToModule
        moduleId={i}
        key={i}
        userInfo={userInfo}
        color={"#6164FE"}
        isFinished={userInfo.finishedModules.includes(i)}
      />
    );
  }

  return <div>{links}</div>;
}
