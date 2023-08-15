import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import ModuleViewer from "@/components/ModuleViewer/ModuleViewer";

export default function ModuleView() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Head>
        <title>My Dream World</title>
      </Head>
      <DashboardHeader />
      <ModuleViewer moduleId={id} />
    </>
  );
}
