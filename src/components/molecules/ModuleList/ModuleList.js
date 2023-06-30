import LinkToModule from '@/components/atoms/LinkToModule/LinkToModule';
import React from 'react';

export default function ModuleList({ openModules = 0 }) {
  const links = [];
  for (let i = 1; i < openModules + 1; i++) {
    links.push(<LinkToModule moduleId={i} key={i} />);
  }

  return <div>{links}</div>;
}
