import Input from "@/components/atoms/Input/Input";
import styles from "./LoginForm.module.css";
import React, { useState } from "react";
import Button from "@/components/atoms/Button/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      alert(result.error);
      console.log(result.error);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Prisijungti</h1>
      <Input
        text={"Emailas:"}
        id={"email"}
        type={"email"}
        value={email}
        setValue={handleSetEmail}
      />
      <Input
        text={"Slaptažodis:"}
        id={"password"}
        type={"password"}
        value={password}
        setValue={handleSetPassword}
      />
      <Button text={"Prisijungti"} />
      <Link href="/forgotPassword">Pamiršau slaptažodį</Link>
    </form>
  );
}
