import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const useInfinityScroll = (cb) => {
  const [isFetching, setFetching] = useState(false);

  function onScrollHandler() {
    const scrollPos =
      Math.round(window.innerHeight + document.documentElement.scrollTop) + 10;
    const docHeight = document.documentElement.offsetHeight;

    if (scrollPos < docHeight || isFetching) return;

    setFetching(true);
  }

  const scroll = debounce(onScrollHandler, 150);

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    cb();
  }, [isFetching]);

  return [isFetching, setFetching];
};

export { useInfinityScroll };
