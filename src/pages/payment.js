import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Success from "@/components/atoms/Success/Success";
import Failure from "@/components/atoms/Failure/Failure";

export default function payment() {
  const router = useRouter();
  const { success, canceled, userId, groupId } = router.query;

  useEffect(() => {
    if (success === "true" && userId && groupId) {
      const body = {
        userId,
        groupId,
      };

      axios
        .post("/api/group/addUser", body)
        .then((res) => {})
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [success, userId, groupId]);
  return (
    <>
      <Header />
      <div>
        {canceled && <Failure text={"KAŽKAS ĮVYKO NE TAIP"} />}
        {success && <Success text={"APMOKĖTA SĖKMINGAI"} />}
      </div>
      <Footer />
    </>
  );
}
