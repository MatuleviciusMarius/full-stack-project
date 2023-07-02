import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';
import Head from 'next/head';

export default function Success() {
  return (
    <>
      <Head>
        <title>My Dream World</title>
      </Head>
      <Header />
      Emailas patvirtintas
      <Footer />
    </>
  );
}
