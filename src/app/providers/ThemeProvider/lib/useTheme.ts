import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export const useTheme = ():IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

  const toggleTheme = () => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    document.body.className = newTheme;
  }, [newTheme]);

  return { theme, toggleTheme };
};
