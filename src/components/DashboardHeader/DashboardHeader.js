import React from "react";
import styles from "./DashboardHeader.module.css";
import { signOut } from "next-auth/react";
import { Button } from "@mantine/core";

export default function DashboardHeader() {
  function handleSignOut() {
    signOut({ callbackUrl: "/" });
  }

  return (
    <div className={styles.header}>
      <img className={styles.logo} src="/images/logo-min.png" alt="LOGO" />
      <Button variant="outline" radius="xl" size="md" onClick={handleSignOut}>
        Atsijungti
      </Button>
    </div>
  );
}
