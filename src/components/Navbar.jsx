import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggler from "./ThemeToggler";
import { VscSymbolInterface } from "react-icons/vsc";

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
      path: "https://github.com/smrn001/Sajilo-UI",
      external: true,
      icon: <FaGithub />,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add search handling logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA] dark:bg-[#0A0A0A] border-b dark:border-[#252525] border-[#EBEBEB]">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link
          to="/"
          className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white"
        >
          <VscSymbolInterface className="bg-black dark:bg-white dark:text-black text-white rounded-lg h-8 w-8 p-1" />
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
                className="flex items-center text-gray-700 dark:text-gray-300 font-semibold hover:text-gray-900 dark:hover:text-gray-400"
                aria-label={`Go to ${link.name}`}
              >
                {link.icon}
                <span className="ml-1">{link.name}</span>
              </a>
            ) : (
              <Link
                key={index}
                to={link.path}
                className="text-gray-700 dark:text-gray-300 font-semibold hover:text-gray-900 dark:hover:text-gray-400"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
              </Link>
            )
          )}
          <div className="flex items-center space-x-2 ml-4">
            <ThemeToggler />
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <form onSubmit={handleSearchSubmit} className="ml-4">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-1 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-gray-500 dark:border-gray-600 dark:bg-[#0A0A0A] dark:text-white"
            />
          </form>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex">
          <ThemeToggler />
          <button
            className="text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

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
                    aria-label={`Go to ${link.name}`}
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
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <form onSubmit={handleSearchSubmit}>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                />
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
