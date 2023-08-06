import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Loading from "@/components/atoms/Loading/Loading";
import { TextInput, Button, Group, Box, Notification } from "@mantine/core";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function forgotPassword() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.userid;
      console.log(id);
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
      setLoading(true);
      setError(null);
      await axios.put(`/api/user/changePassword?id=${userId}&password=${password}`);
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <Box maw={320} mx="auto">
        <TextInput
          mt="md"
          label="Naujas slaptažodis"
          placeholder="password"
          value={password}
          onChange={handleChangePassword}
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
