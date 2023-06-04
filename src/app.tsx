import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import useTheme from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export function App() { 
  const { theme, toggleTheme } = useTheme()
    return (
      <div className={classNames("app", {}, [`${theme}`])}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Suspense fallback="...loading...">
          <Routes>
            <Route path="/about" element={<AboutPageAsync />} />
            <Route path="/" element={<MainPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    );
}