import React from 'react';
import { getStyles } from '../../utils/getStyles';
import styles from './Info.module.scss';

const style = getStyles(styles);

const Info = ({ children }) => {
  return <div className={style.get('info')}>{children}</div>;
};

const Media = ({ children }) => {
  return <div className={style.get('info__image')}>{children}</div>;
};

const Image = ({ ...props }) => <img {...props} />;

const Body = ({ children }) => {
  return <div className={style.get('info__body')}>{children}</div>;
};

const Title = ({ children, Type = 'h1' }) => {
  return <Type className={style.get('info__title')}>{children}</Type>;
};

const Text = ({ children }) => {
  return <p className={style.get('info__text')}>{children}</p>;
};

Info.Media = Media;
Info.Image = Image;
Info.Body = Body;
Info.Title = Title;
Info.Text = Text;

export default Info;
