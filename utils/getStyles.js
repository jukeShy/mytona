// Функция, которая возвращает стили компонента ввиде строки
// чтобы не писать громоздкую конструкцию className={${styles['foo']} ${styles['bar']}}

const getStyles = (styles) => {
  const get = (...style) => style.map((s) => styles[s]).join(' ');

  return {
    get,
  };
};

export { getStyles };
