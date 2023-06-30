import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import styles from './dashboard.module.css';
import Loading from '@/components/atoms/Loading/Loading';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import AdminAside from '@/components/molecules/AdminAside/AdminAside';
import GroupManager from '@/components/organisms/GroupManager/GroupManager';

export default function dashboard() {
  const [displayState, setDisplayState] = useState('');

  const router = useRouter();

  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'unauthenticated' || user.role !== 'admin') {
    return router.push('/');
  }

  function displayData() {
    if (displayState === 'people') {
    } else if (displayState === 'groups') {
      return <GroupManager />;
    }
  }

  return (
    <div>
      <DashboardHeader />
      <AdminAside setDisplayState={setDisplayState} />
      <main className={styles.main}>{displayData()}</main>
    </div>
  );
}
