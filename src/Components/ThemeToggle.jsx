import { use } from "react";
import { ThemeContext } from "../Context/ThemeContext";


const ThemeToggle = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-sm"
    >
      {theme === "light" ? " Light" : " Dark"}
    </button>
  );
};

export default ThemeToggle;
