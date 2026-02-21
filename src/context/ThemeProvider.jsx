import { useState } from "react";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [themeName, setThemeName] = useState("Тёмная тема");

  const toggleTheme = () => {
    // console.log("переключили тему");
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    setThemeName((prevThemeName) => prevThemeName === "Тёмная тема" ? "Светлая тема" : "Тёмная тема")
  };


  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        toggleTheme
      }}>
      {children}
    </ThemeContext.Provider>
  )
}