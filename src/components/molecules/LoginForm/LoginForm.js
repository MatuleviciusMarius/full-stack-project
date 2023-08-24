import Input from "@/components/atoms/Input/Input";
import styles from "./LoginForm.module.css";
import React, { useState } from "react";
import Button from "@/components/atoms/Button/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Loading from "@/components/atoms/Loading/Loading";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);

    if (result.error) {
      setError("Neteisingas el. paštas arba slaptažodis");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.heading}>PRISIJUNGIMAS</h1>
      <Input
        text={"El. paštas"}
        id={"email"}
        type={"email"}
        value={email}
        setValue={handleSetEmail}
      />
      <Input
        text={"Slaptažodis"}
        id={"password"}
        type={"password"}
        value={password}
        setValue={handleSetPassword}
      />
      <div className={styles.container}>
        {loading ? <Loading /> : <Button filled text={"Prisijungti"} />}
        <p className={styles.error}>{error}</p>
      </div>
      <div className={styles.container}>
        <Link href="/forgotPassword">Pamiršau slaptažodį</Link>
      </div>
    </form>
  );
}
