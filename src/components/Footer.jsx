import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { useTheme } from "./ThemeContext"; // Import the Theme context (assuming you have one)

const Footer = () => {
  const { theme } = useTheme(); // Access the current theme from context

  return (
    <footer
      className={`py-6 ${
        theme === "dark" ? "dark:bg-[#0A0A0A] border-t text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className={`hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
          >
            Home
          </Link>
          <Link
            to="/components"
            className={`hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
          >
            Components
          </Link>
          <Link
            to="/docs"
            className={`hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
          >
            Docs
          </Link>
        </div>

        {/* GitHub Link */}
        <div>
          <a
            href="https://github.com/yourusername/sajiloui"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
          >
            <FaGithub className="mr-1" /> {/* GitHub Icon */}
            GitHub
          </a>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Sajilo UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;