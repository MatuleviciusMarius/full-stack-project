import React from 'react';
import { useSession } from 'next-auth/react';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { useRouter } from 'next/router';
import Loading from '@/components/atoms/Loading/Loading';

function dashboard() {
  const router = useRouter();

  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'unauthenticated') {
    router.push('/login');
    return <p>Access Denied</p>;
  }

  return (
    <div>
      {user && (
        <>
          <DashboardHeader />
          <pre>{JSON.stringify(user)}</pre>
        </>
      )}
    </div>
  );
}

export default dashboard;
