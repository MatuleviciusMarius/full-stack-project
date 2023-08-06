import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { TextInput, Button, Group, Box, Notification } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";

export default function forgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      } catch (error) {
        setError("Kazkas nepavyko bandykite vėliau");
      }
    }
  }

  return (
    <>
      <Header />
      <Box maw={320} mx="auto">
        <TextInput
          mt="md"
          label="Jūsų email adresas"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        {error && <Notification color="red">{error}</Notification>}
        <Group position="center" mt="xl">
          <Button variant="outline" onClick={handleButton}>
            Keisti slaptažodį
          </Button>
        </Group>
      </Box>
      <Footer />
    </>
  );
}
