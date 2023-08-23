import Head from "next/head";
import Main from "@/components/Main/Main";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const satoshi = localFont({ src: "../../fonts/Satoshi-Regular.otf", variable: "--font-satoshi" });

export default function Home() {
  return (
    <div className={satoshi.variable}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
          rel="stylesheet"
        />
        <title>My Dream World</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
