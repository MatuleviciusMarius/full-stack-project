import Head from "next/head";
import Main from "@/components/Main/Main";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>My Dream World</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
