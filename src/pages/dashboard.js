import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "@/components/atoms/Loading/Loading";
import axios from "axios";
import ModuleList from "@/components/molecules/ModuleList/ModuleList";
import Head from "next/head";
import Purchase from "@/components/Purchase/Purchase";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../styles/dashboard.module.css";

function dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const user = session?.user;

  const [userInfo, setUserInfo] = useState({});
  const [group, setGroup] = useState();

  useEffect(() => {
    if (status === "authenticated") {
      axios
        .get(`/api/user/getUser/${user.id}`)
        .then((response) => {
          setUserInfo(response.data);
          setGroup(response.data.group);
        })
        .catch((err) => console.log(err));
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="center-text">
        <Loading />
      </div>
    );
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
      <Header isDashboard />
      {user && (
        <div>
          {userInfo?.name ? (
            <div
              className={styles.greetingContainer}
              style={{
                textAlign: group ? "center" : "left",
                marginBottom: group ? "74px" : "auto",
              }}
            >
              <h1 className={styles.greetings}>SVEIKA, {userInfo.name.toUpperCase()}</h1>
            </div>
          ) : (
            <div className="center-text">
              <Loading />
            </div>
          )}
          {group ? (
            <ModuleList openModules={group.openLessons} userInfo={userInfo} groupId={group._id} />
          ) : (
            <Purchase userId={user.id} />
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default dashboard;
