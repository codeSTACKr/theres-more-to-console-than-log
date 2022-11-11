import Head from 'next/head';
import { MantineProvider } from "@mantine/core";
import "@code-hike/mdx/styles";
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>There's More to Console than .log()</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <article style={{ maxWidth: 768, margin: "0 auto" }}>
          <Component {...pageProps} />
        </article>
      </MantineProvider>
    </>
  );
}

export default MyApp;
