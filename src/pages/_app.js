import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const satoshiLight = localFont({
  src: "../../fonts/satoshi/Satoshi-Light.otf",
  variable: "--font-satoshi-light",
});
const satoshi = localFont({
  src: "../../fonts/satoshi/Satoshi-Regular.otf",
  variable: "--font-satoshi",
});
const spartan300 = localFont({
  src: "../../fonts/spartan/Spartan-Thin.ttf",
  variable: "--font-spartan-300",
});
const spartan400 = localFont({
  src: "../../fonts/spartan/Spartan-Light.ttf",
  variable: "--font-spartan-400",
});
const spartan500 = localFont({
  src: "../../fonts/spartan/Spartan-Regular.ttf",
  variable: "--font-spartan-500",
});
const spartan700 = localFont({
  src: "../../fonts/spartan/Spartan-SemiBold.ttf",
  variable: "--font-spartan-700",
});

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>My Dream World</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider withNormalizeCSS>
        <SessionProvider session={pageProps.session}>
          <div
            className={`${satoshiLight.variable} ${satoshi.variable} ${inter.variable} ${spartan300.variable} ${spartan400.variable} ${spartan500.variable} ${spartan700.variable} container`}
          >
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </MantineProvider>
    </>
  );
}
