import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import ThemeToggler from "./ThemeToggler"; // Import the Theme Toggler

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const navLinks = [
    { name: "Components", path: "/components" },
    { name: "Docs", path: "/docs" },
    { name: "About", path: "/about" },
    {
      name: "",
      path: "https://github.com/yourusername/sajiloui",
      external: true,
      icon: <FaGithub />,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        searchInputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-[#0A0A0A] shadow-md boder-b ">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Sajilo UI
        </Link>

        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link, index) =>
            link.external ? (
              <a
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 font-semibold hover:text-blue-500 dark:hover:text-blue-400"
              >
                {link.icon}
                <span className="ml-1">{link.name}</span>
              </a>
            ) : (
              <Link
                key={index}
                to={link.path}
                className="text-gray-700 dark:text-gray-300 font-semibold hover:text-blue-500 dark:hover:text-blue-400"
              >
                {link.name}
              </Link>
            )
          )}
          <ThemeToggler />

          {/* Search Input */}
          <input
            ref={searchInputRef}
            type="text"
            placeholder="  Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-4 p-1 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-[#0A0A0A] dark:text-white"
          />
          {/* Theme Toggler */}
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <div className="flex flex-col py-4 px-4 space-y-2">
              {navLinks.map((link, index) =>
                link.external ? (
                  <a
                    key={index}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.icon}
                    <span className="ml-1">{link.name}</span>
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
              {/* Theme Toggler for Mobile */}
              <ThemeToggler />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
