import Link from 'next/link';
import { FC } from 'react';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={{ padding: '16px' }}>{children}</div>;
};

export default Layout;
