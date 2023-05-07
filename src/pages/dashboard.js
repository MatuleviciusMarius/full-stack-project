import React from 'react';
import { useSession } from 'next-auth/react';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';

function dashboard() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div>
      <DashboardHeader />
    </div>
  );
}

export default dashboard;
