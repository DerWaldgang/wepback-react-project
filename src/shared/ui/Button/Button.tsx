import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR ='clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'

}

export enum SizeButton {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton
  square?: boolean
  size?: SizeButton
}

export const Button: FC<ButtonProps> = ({
    className, children, theme, square, size = SizeButton.M, ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [styles.square]: square,
        [styles[size]]: true,
    };
    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
