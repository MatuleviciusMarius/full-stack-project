import { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();

function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProp = async (ctx) => {
  const initialProps = await getInitialProps(ctx);

  return { ...initialProps };
};

export default Document;
