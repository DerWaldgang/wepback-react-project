import { selectUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUser';
import { LangSwitcher } from 'features/ui/LangSwitcher';
import { ThemeSwitcher } from 'features/ui/ThemeSwitcher';
import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { useSelector } from 'react-redux';
import profileImg from 'shared/assets/icons/user-32-32.png';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const isAuth = useSelector(selectUserAuthData);

    useEffect(() => {
        if (isAuth) {
            setIsAuthModal(false);
        }
    }, [isAuth]);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (isAuth) {
        return (
            <nav className={classNames(styles.Navbar, {}, [className])}>
                <div className={styles.features}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                    <img src={profileImg} alt={profileImg} />
                </div>
                <Button
                    theme={ThemeButton.OUTLINE_INVERTED}
                    className={styles.loginBtn}
                    onClick={onLogout}
                >
                    {t('Logout')}

                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </nav>
        );
    }
    return (
        <nav className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.features}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <Button
                theme={ThemeButton.OUTLINE_INVERTED}
                className={styles.loginBtn}
                onClick={onShowModal}
            >
                {t('Login')}

            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </nav>
    );
});
