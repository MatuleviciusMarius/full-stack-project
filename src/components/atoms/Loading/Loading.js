import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div class={styles["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
