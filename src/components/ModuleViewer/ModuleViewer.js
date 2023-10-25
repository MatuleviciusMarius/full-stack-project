import React, { useEffect } from "react";
import Module1 from "@/components/modules/Module1/Module1";
import Module2 from "@/components/modules/Module2/Module2";
import Module3 from "@/components/modules/Module3/Module3";
import Module4 from "@/components/modules/Module4/Module4";
import Module5 from "@/components/modules/Module5/Module5";
import Module6 from "@/components/modules/Module6/Module6";
import Module7 from "@/components/modules/Module7/Module7";
import Module8 from "@/components/modules/Module8/Module8";
import styles from "./ModuleViewer.module.css";
import Module9 from "../modules/Module9/Module9";
import Link from "next/link";

export default function ModuleViewer({ moduleId }) {
  function pickModule() {
    switch (moduleId) {
      case "1":
        return <Module1 />;
      case "2":
        return <Module2 />;
      case "3":
        return <Module3 />;
      case "4":
        return <Module4 />;
      case "5":
        return <Module5 />;
      case "6":
        return <Module6 />;
      case "7":
        return <Module7 />;
      case "8":
        return <Module8 />;
      case "9":
        return <Module9 />;
    }
  }
  return (
    <div className={styles.paper}>
      <Link href="/dashboard">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.46922 14.8374C7.5952 14.8374 7.72412 14.7876 7.8208 14.6909C8.01416 14.4976 8.01416 14.1812 7.8208 13.9878L1.20264 7.36963L7.72412 0.848145C7.91748 0.654785 7.91748 0.338379 7.72412 0.14502C7.53076 -0.0483398 7.21436 -0.0483398 7.021 0.14502L0.14502 7.01807C-0.0483398 7.21143 -0.0483398 7.52783 0.14502 7.72119L7.11475 14.6909C7.21435 14.7905 7.34032 14.8374 7.46922 14.8374Z"
            fill="black"
          />
        </svg>{" "}
        Grįžti
      </Link>
      {pickModule()}
      <Link href="/dashboard">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.46922 14.8374C7.5952 14.8374 7.72412 14.7876 7.8208 14.6909C8.01416 14.4976 8.01416 14.1812 7.8208 13.9878L1.20264 7.36963L7.72412 0.848145C7.91748 0.654785 7.91748 0.338379 7.72412 0.14502C7.53076 -0.0483398 7.21436 -0.0483398 7.021 0.14502L0.14502 7.01807C-0.0483398 7.21143 -0.0483398 7.52783 0.14502 7.72119L7.11475 14.6909C7.21435 14.7905 7.34032 14.8374 7.46922 14.8374Z"
            fill="black"
          />
        </svg>{" "}
        Grįžti
      </Link>
    </div>
  );
}
