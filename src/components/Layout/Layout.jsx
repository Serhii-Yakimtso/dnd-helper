import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </>
  );
}

export default Layout;
