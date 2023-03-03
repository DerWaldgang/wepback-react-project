import { FC, useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ui/ThemeSwitcher';
import { LangSwitcher } from 'features/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

import profileImg from 'shared/assets/icons/user-32-32.png';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

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
                onClick={onToggleModal}
            >
                {t('Login')}

            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>1231241232341231212312315123</Modal>
        </nav>
    );
};
