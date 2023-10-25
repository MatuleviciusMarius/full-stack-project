import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ModuleViewer from "@/components/ModuleViewer/ModuleViewer";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ModuleView() {
  const router = useRouter();
  const { id, groupId } = router.query;

  console.log(router);

  return (
    <>
      <Head>
        <title>My Dream World</title>
      </Head>
      <Header isDashboard />
      <ModuleViewer moduleId={id} />
      <Footer />
    </>
  );
}
