import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import HomeIcon from 'shared/assets/icons/main-20-20.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <div className={styles.items}>
                <div className={styles.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={styles.link}
                        to={RoutePath.home}
                    >
                        <HomeIcon className={styles.icon} />
                        <span>{t('Home')}</span>
                    </AppLink>
                </div>
                <div className={styles.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={styles.link}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={styles.icon} />
                        <span>{t('About')}</span>
                    </AppLink>
                </div>
            </div>

            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={() => onToggle()}
                className={styles.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={SizeButton.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

        </div>
    );
};
