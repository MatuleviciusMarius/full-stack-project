import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function login() {
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}
