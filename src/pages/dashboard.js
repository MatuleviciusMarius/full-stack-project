import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import { useRouter } from "next/router";
import Loading from "@/components/atoms/Loading/Loading";
import axios from "axios";
import ModuleList from "@/components/molecules/ModuleList/ModuleList";
import Head from "next/head";
import Purchase from "@/components/Purchase/Purchase";

function dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const user = session?.user;

  const [userInfo, setUserInfo] = useState({});
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (status === "authenticated") {
      axios
        .get(`/api/user/getUser/${user.id}`)
        .then((response) => {
          setUserInfo(response.data);
          setGroups(response.data.groups);
        })
        .catch((err) => console.log(err));
    }
  }, [status]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Head>
        <title>My Dream World</title>
      </Head>
      {user && (
        <>
          <DashboardHeader />
          {userInfo.name && <h1 className="center-text">Labas, {userInfo.name}</h1>}
          {groups.length && <h1 className="center-text">Grupės Pavadinimas: {groups[0].name}</h1>}
          {groups.length ? (
            <ModuleList openModules={groups[0].openLessons} userInfo={userInfo} />
          ) : (
            <Purchase userId={user.id} />
          )}
        </>
      )}
    </>
  );
}

export default dashboard;
