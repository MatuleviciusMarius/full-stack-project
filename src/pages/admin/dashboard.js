import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Loading from '@/components/atoms/Loading/Loading';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';

export default function dashboard() {
  const router = useRouter();

  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'unauthenticated' || user.role !== 'admin') {
    return router.push('/');
  }
  return (
    <div>
      <DashboardHeader />
    </div>
  );
}
