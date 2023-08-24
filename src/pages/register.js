import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RegisterForm from "@/components/molecules/RegisterForm/RegisterForm";
import React from "react";
import Head from "next/head";

export default function register() {
  return (
    <>
      <Head>
        <title>Registruotis - My Dream World</title>
      </Head>
      <Header />
      <RegisterForm />
      <Footer />
    </>
  );
}
