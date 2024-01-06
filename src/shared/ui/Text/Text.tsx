import { memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted'
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText
}

export const Text = memo((props: TextProps) => {
    const {
        className, title, text, theme = ThemeText.PRIMARY,
    } = props;
    const mods : Mods = { [styles[theme]]: true };
    return (
        <div className={classNames(styles.Text, mods, [className])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
