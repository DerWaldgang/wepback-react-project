import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss' 
import { DarkModeSwitch } from 'react-toggle-dark-mode';


interface ThemeSwitcherProps {
className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const { theme, toggleTheme } = useTheme();
    const [isLightMode, setLightMode] = useState(theme ===  Theme.LIGHT);

    const handleSwitch = () => {
        toggleTheme()
        setLightMode(!isLightMode)
    }

    return <DarkModeSwitch className={classNames(styles.ThemeSwitcher, {}, [className])} onChange={() => handleSwitch()} checked={isLightMode}/>
}
