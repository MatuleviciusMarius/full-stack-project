import React from 'react';
import Router from 'next/router';
import { useSession } from 'next-auth/react';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { useRouter } from 'next/router';

function dashboard() {
  const router = useRouter();

  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === 'loading') {
    return <p>Loading...</p>;
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
          <pre>{user}</pre>
        </>
      )}
    </div>
  );
}

export default dashboard;
