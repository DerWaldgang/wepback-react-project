import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { sidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [isCollapsed, seIsCollapsed] = useState(false);
    const onToggle = () => {
        seIsCollapsed(!isCollapsed);
    };

    const sidebaListMapper = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem key={item.path} item={item} isCollapsed={isCollapsed} />
    )), [isCollapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: isCollapsed }, [className])}
        >
            <div className={styles.items}>
                {sidebaListMapper}
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
                {isCollapsed ? '>' : '<'}
            </Button>
        </div>
    );
});
