import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Loading from "@/components/atoms/Loading/Loading";
import { TextInput, Button, Group, Box, Notification } from "@mantine/core";
import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";

export default function forgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChangeEmail(value) {
    setEmail(value.target.value);
  }

  async function handleButton() {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(email)) {
      setError("Netinkamas emailo adresas");
    } else {
      try {
        setError(null);
        setLoading(true);
        await axios.get(`/api/user/sendChangePasswordEmail?email=${email}`);
        setLoading(false);
        setMessage("Netrukus gausite elektroninį laišką ");
      } catch (error) {
        setMessage("Kazkas nepavyko bandykite vėliau");
      }
    }
  }

  return (
    <>
      <Head>
        <title>Pamiršau Slaptažodį</title>
      </Head>
      <Header />
      <Box maw={320} mx="auto">
        {message && <Notification>{message}</Notification>}
        <TextInput
          mt="md"
          label="Jūsų email adresas"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        {error && <Notification color="red">{error}</Notification>}
        <Group position="center" mt="xl">
          {loading ? (
            <Loading />
          ) : (
            <Button variant="outline" onClick={handleButton}>
              Keisti slaptažodį
            </Button>
          )}
        </Group>
      </Box>
      <Footer />
    </>
  );
}
