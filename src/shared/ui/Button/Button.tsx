import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR ='clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
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
  children: ReactNode
}

export const Button = memo(({
    className, children, theme = ThemeButton.CLEAR, square = false, size = SizeButton.M, ...otherProps
}: ButtonProps) => {
    const mods: Mods = {
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
});
