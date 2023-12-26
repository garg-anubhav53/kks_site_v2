import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>KKS</title>
        <meta name="description" content="Built using create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout />
      <Footer />
    </>
  );
}
