import Link from 'next/link';
import { FC } from 'react';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <h1>
        <Link href="/">Home</Link>
      </h1>
      {children}
    </>
  );
};

export default Layout;
