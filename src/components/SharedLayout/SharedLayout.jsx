import AppBar from '../AppBar/AppBar';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  console.log('SharedLayout');
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};

export default SharedLayout;
