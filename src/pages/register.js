import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import RegisterForm from '@/components/molecules/RegisterForm/RegisterForm';
import React from 'react';

export default function register() {
  return (
    <div>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}
