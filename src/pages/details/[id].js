import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';
import { useRouter } from 'next/router';
import DetailsSection from '@/components/molecules/DetailsSections/DetailsSection';
import detailsText from '@/data/detailsText';
import Head from 'next/head';

export default function about() {
  const router = useRouter();
  const { id } = router.query;

  function pickText() {
    switch (id) {
      case 'aboutme':
        return detailsText.aboutMe;
      case 'about':
        return detailsText.about;
      case 'practicalGuidance':
        return detailsText.practicalGuidance;
      default:
        return '';
    }
  }

  return (
    <>
      <Head>
        <title>My Dream World</title>
      </Head>
      <Header />
      <DetailsSection text={pickText()} />
      <Footer />
    </>
  );
}
