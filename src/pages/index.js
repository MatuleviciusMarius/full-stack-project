import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LoginForm from "@/components/molecules/LoginForm/LoginForm";
import React, { useEffect } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);
  return (
    <div className="page">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Prisijungimas - My Dream World</title>
      </Head>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}
