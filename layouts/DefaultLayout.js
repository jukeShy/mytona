import React from 'react';
import Header from '../components/Header';

const DefaultLayout = ({ children }) => {
  return (
    <div id='webpage'>
      <Header />
      <main className='page-main'>
        <div className='container'>{children}</div>
      </main>
    </div>
  );
};

export default DefaultLayout;
