import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import RulesSection from '@/components/molecules/RulesSection/RulesSection';

export default function rules() {
  return (
    <>
      <Head>
        <title>Taisyklės - My Dream World</title>
      </Head>
      <Header />
      <RulesSection />
      <Footer />
    </>
  );
}
