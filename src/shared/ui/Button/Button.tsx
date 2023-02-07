import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
    CLEAR ='clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({className,children, theme,  ...otherProps}) => {

  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
