import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";



export const ThemeProvider = ({ children }) => {
  // load saved theme or default to light
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};
