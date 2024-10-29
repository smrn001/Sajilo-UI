// ThemeToggler.js
import { useTheme } from "./ThemeContext";
import { RiMoonLine, RiSunLine } from "react-icons/ri"; // Import icons

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center p-2  rounded-full "
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <RiMoonLine className="text-gray-700 dark:text-gray-300" />
      ) : (
        <RiSunLine className="text-gray-50" />
      )}
    </button>
  );
};

export default ThemeToggler;
