import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Input from "@/components/atoms/Input/Input";
import Loading from "@/components/atoms/Loading/Loading";
import { Box, Notification } from "@mantine/core";
import Button from "@/components/atoms/Button/Button";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function forgotPassword() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.userid;
      setUserId(id);
    }
  }, [router.isReady, router.query]);

  function handleChangePassword(value) {
    setPassword(value.target.value);
  }

  async function handleButton() {
    if (password.length < 8) {
      setError("Slaptažodis turi būti bent 8 simbolių ilgumo");
    } else {
      try {
        setLoading(true);
        setError(null);
        await axios.put(`/api/user/changePassword?id=${userId}&password=${password}`);
        setPassword("");
        setLoading(false);
        setMessage("Slaptažodis pakeistas, galite prisijungti");
      } catch (error) {
        setLoading(false);
        setMessage("Kažkas nepavyko - bandykite vėliau");
      }
    }
  }

  return (
    <>
      <Head>
        <title>Keisti Slaptažodį</title>
      </Head>
      <Header />
      <div className="flex-container">
        <Input
          text={"Naujas slaptažodis"}
          setValue={handleChangePassword}
          placeholderText={"********"}
          className="input-width"
          label="Naujas slaptažodis"
          placeholder="password"
          value={password}
        />
        {loading ? (
          <Loading />
        ) : (
          <>
            {message && <Notification>{message}</Notification>}
            {error && <Notification color="red">{error}</Notification>}
            <Button text={"Keisti"} filled action={handleButton}>
              Keisti slaptažodį
            </Button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
