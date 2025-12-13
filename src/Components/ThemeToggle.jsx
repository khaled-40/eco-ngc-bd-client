import { use } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";


const ThemeToggle = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-sm"
    >
      {theme === "light" ? <CiLight /> : <MdDarkMode />}
      {theme === "light" ? " Light" : " Dark"}
    </button>
  );
};

export default ThemeToggle;
