import React from 'react';
import { useRouter } from 'next/router';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import Module1 from '@/components/modules/Module1/Module1';
import Module2 from '@/components/modules/Module2/Module2';
import Module3 from '@/components/modules/Module3/Module3';
import Module4 from '@/components/modules/Module4/Module4';
import Module5 from '@/components/modules/Module5/Module5';
import Module6 from '@/components/modules/Module6/Module6';
import Module7 from '@/components/modules/Module7/Module7';
import Module8 from '@/components/modules/Module8/Module8';

export default function ModuleView() {
  const router = useRouter();
  const id = router.query.id;

  function pickModule() {
    switch (id) {
      case '1':
        return <Module1 />;
      case '2':
        return <Module2 />;
      case '3':
        return <Module3 />;
      case '4':
        return <Module4 />;
      case '5':
        return <Module5 />;
      case '6':
        return <Module6 />;
      case '7':
        return <Module7 />;
      case '8':
        return <Module8 />;
    }
  }

  return (
    <div>
      <DashboardHeader />
      {pickModule()}
    </div>
  );
}
