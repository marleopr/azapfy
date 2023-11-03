"use client";
import Head from "next/head";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light" />
      </Head>
      <main>
        <Header />
        <HomePage />
        <Banner />
        <Footer />
      </main>
    </>
  );
}
