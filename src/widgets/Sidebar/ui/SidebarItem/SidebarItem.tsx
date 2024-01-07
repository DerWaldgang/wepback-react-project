import { selectUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    isCollapsed: boolean;
}

export const SidebarItem = memo(({ item, isCollapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(selectUserAuthData);

  if (item.isAuthOnly && !isAuth) {
    return null;
  }

  return (
    <div className={styles.SidebarItem}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(styles.link, { [styles.collapsed]: isCollapsed }, [])}
      >
        <item.Icon className={styles.icon} />
        <span>{t(item.text)}</span>
      </AppLink>
    </div>
  );
});
