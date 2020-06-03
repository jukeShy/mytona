import React, { useState, useEffect } from 'react';
import { useInfinityScroll } from '../../hook/useInfinittyScroll';
import { Loader } from '../';
import styles from './List.module.scss';

const List = ({ children, ...props }) => {
  return (
    <>
      <div {...props}>{children}</div>
    </>
  );
};

const Title = ({ children, Type = 'h2' }) => {
  return <Type className={styles['list__title']}>{children}</Type>;
};

const Body = ({ children, start, countInc }) => {
  const [count, setCount] = useState(0);
  const [isFetching, setFetching] = useInfinityScroll(loadMore);

  useEffect(() => {
    setCount(start);
  }, [start]);

  function loadMore() {
    if (count >= children.length) return setFetching(false);

    setTimeout(() => {
      setCount((prevState) => prevState + countInc);
      setFetching(false);
    }, 3000);
  }

  return (
    <>
      <div className={styles['list__body']}>{children.slice(0, count)}</div>
      {isFetching && <Loader />}
    </>
  );
};

List.Title = Title;
List.Body = Body;

export default List;
