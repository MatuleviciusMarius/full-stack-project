import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import styles from "./dashboard.module.css";
import Loading from "@/components/atoms/Loading/Loading";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import AdminAside from "@/components/molecules/AdminAside/AdminAside";
import GroupManager from "@/components/organisms/GroupManager/GroupManager";
import PeopleManager from "@/components/organisms/PeopleManager/PeopleManager";

export default function Dashboard() {
  const [displayState, setDisplayState] = useState("");
  const [groups, setGroups] = useState([]);

  const sortedGroups = useMemo(() => {
    return groups.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }, [groups]);
  useEffect(() => {
    axios.get("/api/group/getAll").then((response) => {
      const sortedGroups = response.data.groups.sort(
        (a, b) => new Date(a.startDate) - new Date(b.startDate)
      );
      setGroups(sortedGroups);
    });
  }, []);

  const router = useRouter();
  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated" || user.role !== "admin") {
    router.push("/");
    return <Loading />;
  }

  function displayData() {
    if (displayState === "people") {
      return <PeopleManager groups={sortedGroups} />;
    } else if (displayState === "groups") {
      return <GroupManager groups={sortedGroups} />;
    }
  }

  return (
    <div>
      <DashboardHeader />
      <AdminAside setDisplayState={setDisplayState} />
      <main className={styles.main}>{displayData()}</main>
    </div>
  );
}
