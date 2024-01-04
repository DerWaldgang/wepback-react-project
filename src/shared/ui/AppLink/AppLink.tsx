import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?:AppLinkTheme,
  children?: ReactNode;
}

const AppLink = memo(({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}: AppLinkProps) => (
    <Link
        className={classNames(styles.AppLink, {}, [className, styles[theme]])}
        to={to}
        {...otherProps}
    >
        {children}
    </Link>
));

export default AppLink;
