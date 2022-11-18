import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react"
import theme from "../theme";

class MyDocument extends NextDocument {
  static async getInitialProps(ctx:any) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
        />
        <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Poppins:wght@500&display=swap" 
        rel="stylesheet"
        />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialCOlorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

