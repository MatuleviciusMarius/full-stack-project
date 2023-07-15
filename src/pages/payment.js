import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function payment() {
  const router = useRouter();
  const { success, canceled, userId, groupId } = router.query;

  useEffect(() => {
    if (success === "true" && userId && groupId) {
      const body = {
        userId,
        groupId,
      };
      console.log(body);
      axios
        .post("/api/group/addUser", body)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [success, userId, groupId]);
  return (
    <>
      <Header />
      <div>
        {success && (
          <h1 className="center-text">
            Sėkmingai apmokėjote <br />
            Galite prisijungti
          </h1>
        )}
        {canceled && <h1 className="center-text">Mokėjimas atšauktas</h1>}
      </div>
      <Footer />
    </>
  );
}
