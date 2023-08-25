import React, { useState } from "react";
import { useRouter } from "next/router";
import CheckBox from "../CheckBox/CheckBox";
import axios from "axios";
import styles from "./LinkToModule.module.css";

export default function LinkToModule({ moduleId, userInfo, color, isFinished = false }) {
  const router = useRouter();
  const [isModuleCompleted, setIsModuleCompleted] = useState(isFinished);

  function handleClick(e) {
    router.push(`/dashboard/moduleView/${moduleId}`);
  }

  function onChange(isFinished) {
    console.log(isFinished);
    if (isFinished) {
      axios.post(`/api/user/module?moduleId=${moduleId}&userId=${userInfo._id}`);
      setIsModuleCompleted(true);
    } else {
      axios.delete(`/api/user/module?moduleId=${moduleId}&userId=${userInfo._id}`);
      setIsModuleCompleted(false);
    }
  }

  return (
    <div className={styles.container}>
      <span onClick={handleClick} className={styles.moduleText}>
        MODULIS {moduleId}
      </span>
      {isModuleCompleted ? (
        <span onClick={() => onChange(false)} className={styles.interactionText}>
          Atlikta
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00015 16.17L5.53015 12.7C5.34317 12.513 5.08957 12.4079 4.82515 12.4079C4.56072 12.4079 4.30712 12.513 4.12015 12.7C3.93317 12.8869 3.82813 13.1405 3.82812 13.405C3.82813 13.5359 3.85391 13.6655 3.90402 13.7865C3.95412 13.9075 4.02756 14.0174 4.12015 14.11L8.30015 18.29C8.69015 18.68 9.32015 18.68 9.71015 18.29L20.2901 7.70996C20.4771 7.52298 20.5822 7.26938 20.5822 7.00496C20.5822 6.74053 20.4771 6.48693 20.2901 6.29996C20.1032 6.11298 19.8496 6.00793 19.5851 6.00793C19.3207 6.00793 19.0671 6.11298 18.8801 6.29996L9.00015 16.17Z"
              fill="black"
            />
          </svg>{" "}
        </span>
      ) : (
        <span onClick={() => onChange(true)} className={styles.interactionText}>
          Pažymėti kaip atliktą
        </span>
      )}
    </div>
  );
}
