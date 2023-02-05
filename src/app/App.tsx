import { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/RouterProvider";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <button onClick={toggleTheme}>Toggle theme</button>

      <AppRouter />
    </div>
  );
};

export default App;
