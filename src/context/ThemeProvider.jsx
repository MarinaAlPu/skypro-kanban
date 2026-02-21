import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("currentTheme") || "light");
  const [themeNameToSelect, setThemeNameToSelect] = useState(localStorage.getItem("themeNameToSelect") || "Тёмная тема");

  const toggleTheme = () => {
    // console.log("переключили тему");
    setCurrentTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    // localStorage.setItem("theme", theme);
    setThemeNameToSelect((prevThemeName) => prevThemeName === "Тёмная тема" ? "Светлая тема" : "Тёмная тема");
    // localStorage.setItem("themeName", themeName);
  };

  useEffect(() => {
    localStorage.setItem("currentTheme", currentTheme);
    localStorage.setItem("themeNameToSelect", themeNameToSelect);
  }, [currentTheme]);


  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeNameToSelect,
        toggleTheme
      }}>
      {children}
    </ThemeContext.Provider>
  )
}