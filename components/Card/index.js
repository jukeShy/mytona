import React from 'react';
import { getStyles } from '../../utils/getStyles';
import styles from './Card.module.scss';

const style = getStyles(styles);

const Card = ({ children, primary }) => {
  const s = { backgroundColor: primary ? 'var(--color-primary)' : null };
  return (
    <div className={style.get('card')} style={s}>
      {children}
    </div>
  );
};

const Media = ({ children }) => {
  return <div className={style.get('card__media')}>{children}</div>;
};

const Body = ({ children }) => {
  return <div className={style.get('card__body')}>{children}</div>;
};

const Title = ({ children }) => {
  return <h3 className={style.get('card__title')}>{children}</h3>;
};

const Text = ({ children }) => {
  return <p className={style.get('card__text')}>{children}</p>;
};

const Row = ({ children }) => {
  return <div className={style.get('card-list')}>{children}</div>;
};

const RowItem = ({ item }) => {
  return (
    <div className={style.get('card-list__item')}>
      <div className={style.get('character')}>
        <div className={style.get('character-avatar')}>
          <img src={item.image} alt={item.name} />
        </div>
      </div>
    </div>
  );
};

const Image = ({ ...props }) => <img {...props} />;

Card.Media = Media;
Card.Image = Image;
Card.Body = Body;
Card.Title = Title;
Card.Text = Text;
Card.Row = Row;
Card.RowItem = RowItem;

export default Card;
