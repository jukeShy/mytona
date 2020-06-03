import React from 'react';
import { PageLink } from '../../components';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['page-header']}>
      <PageLink href='/'>
        <div className={`${styles['page-header__logo']}`}>
          <img src='/images/logo.svg' alt='Rick and Morty' />
        </div>
      </PageLink>
    </header>
  );
};

export default Header;
