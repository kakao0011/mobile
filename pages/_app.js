import Head from 'next/head';
import Layout from "@/components/layout";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Autos online kaufen</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
