import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'features/ui/ThemeSwitcher';
import profileImg from 'shared/assets/icons/user-32-32.png';
import { LangSwitcher } from 'features/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.features}>
                <ThemeSwitcher />
                <LangSwitcher />
                <img src={profileImg} alt={profileImg} />
            </div>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Home')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About')}</AppLink>
            </div>
        </nav>
    );
};
