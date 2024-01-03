import {
    FC, useCallback, useEffect, useState,
} from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ui/ThemeSwitcher';
import { LangSwitcher } from 'features/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUser';
import { getUserAuthData, userActions } from 'entities/User';

import profileImg from 'shared/assets/icons/user-32-32.png';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    useEffect(() => {
        if (userData) {
            setIsAuthModal(false);
        }
    }, [userData]);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
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
};
