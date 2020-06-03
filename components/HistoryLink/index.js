import React from 'react';
import styles from './HistoryLink.module.scss';
import Link from 'next/link';

const HistoryLink = ({ ...props }) => {
  return (
    <Link {...props}>
      <a className={styles['history-back']}>
        <img src='/images/arrow.svg' alt='Back' title='back' />
      </a>
    </Link>
  );
};

export default HistoryLink;
