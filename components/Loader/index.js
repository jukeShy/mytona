import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles['loader']}>
      <img src='/images/loader.gif' alt='Loading...' />
    </div>
  );
};

export default Loader;
