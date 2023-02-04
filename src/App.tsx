import { FC, Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";

import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";


const App: FC = () => {

const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>

      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <button onClick={toggleTheme}>Toggle theme</button>

      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
