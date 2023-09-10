import React, { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./LinkToModule.module.css";

export default function LinkToModule({ moduleId, userInfo, isFinished = false }) {
  const router = useRouter();
  const [isModuleCompleted, setIsModuleCompleted] = useState(isFinished);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleClick(e) {
    router.push(`/dashboard/moduleView/${moduleId}`);
  }

  function onChange(finished) {
    if (finished) {
      axios.post(`/api/user/module?moduleId=${moduleId}&userId=${userInfo._id}`);
      setIsModuleCompleted(true);
    } else {
      axios.delete(`/api/user/module?moduleId=${moduleId}&userId=${userInfo._id}`);
      setIsModuleCompleted(false);
    }
  }

  useLayoutEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth > 800 ? (
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
      ) : (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileTextContainer} onClick={handleClick}>
            <p>MODULIS {moduleId}</p>
          </div>
          <div
            onClick={() => onChange(isModuleCompleted ? false : true)}
            className={styles.mobileButtonContainer}
            style={{
              background: isModuleCompleted ? "#B18A8A" : "transparent",
            }}
          >
            {isModuleCompleted ? (
              <svg
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.937 25.301L32.611 1.9906L30.3666 0L11.5785 21.184L2.01517 12.7334L0.0286865 14.9815L11.5067 25.1239L11.6081 25.0092L11.937 25.301Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.937 25.301L32.611 1.9906L30.3666 0L11.5785 21.184L2.01517 12.7334L0.0286865 14.9815L11.5067 25.1239L11.6081 25.0092L11.937 25.301Z"
                  fill="#B18A8A"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </>
  );
}
