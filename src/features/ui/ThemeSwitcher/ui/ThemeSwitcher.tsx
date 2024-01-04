import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { memo, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const [isLightMode, setLightMode] = useState(theme === Theme.LIGHT);

    const handleSwitch = () => {
        toggleTheme();
        setLightMode(!isLightMode);
    };

    return (
        <DarkModeSwitch
            size={30}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onChange={() => handleSwitch()}
            checked={isLightMode}
        />
    );
});
