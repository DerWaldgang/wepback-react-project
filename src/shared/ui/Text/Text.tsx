import { memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText
    textAlign?:TextAlign
}

export const Text = memo(({
  className, title, text,
  theme = ThemeText.PRIMARY,
  textAlign = TextAlign.LEFT,
}: TextProps) => {
  const mods : Mods = {
    [styles[theme]]: true,
    [styles[textAlign]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
