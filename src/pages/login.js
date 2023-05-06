import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import React from 'react';

export default function login() {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer className="position-bottom" forceBottom={true} />
    </div>
  );
}
