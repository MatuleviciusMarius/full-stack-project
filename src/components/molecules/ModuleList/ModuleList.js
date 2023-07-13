import LinkToModule from "@/components/atoms/LinkToModule/LinkToModule";
import React from "react";

const colorPalette = ["#88E2D3", "#FFB347", "#D94A6A", "#FFE382", "#AEDFF7", "#7EDD80"];

export default function ModuleList({ openModules = 0, userInfo }) {
  const links = [];
  for (let i = 1; i < openModules + 1; i++) {
    links.push(
      <LinkToModule
        moduleId={i}
        key={i}
        userInfo={userInfo}
        color={colorPalette[i - 1]}
        isFinished={userInfo.finishedModules.includes(i)}
      />
    );
  }

  return <div>{links}</div>;
}
