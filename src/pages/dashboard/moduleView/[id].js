import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import ModuleViewer from "@/components/ModuleViewer/ModuleViewer";

export default function ModuleView() {
  const router = useRouter();
  const id = router.query.id;

  // function pickModule() {
  //   switch (id) {
  //     case "1":
  //       return <Module1 />;
  //     case "2":
  //       return <Module2 />;
  //     case "3":
  //       return <Module3 />;
  //     case "4":
  //       return <Module4 />;
  //     case "5":
  //       return <Module5 />;
  //     case "6":
  //       return <Module6 />;
  //     case "7":
  //       return <Module7 />;
  //     case "8":
  //       return <Module8 />;
  //   }
  // }

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
