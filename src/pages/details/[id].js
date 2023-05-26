import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';
import { useRouter } from 'next/router';
import DetailsSection from '@/components/molecules/DetailsSections/DetailsSection';
import detailsText from '@/data/detailsText';

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

  console.log(id);
  return (
    <>
      <Header />
      <DetailsSection text={pickText()} />
      <Footer />
    </>
  );
}
