import Link from 'next/link';
import React from 'react';

const PageLink = ({ children, ...props }) => {
  return (
    <Link {...props}>
      <a className='link-block'>{children}</a>
    </Link>
  );
};

export default PageLink;
