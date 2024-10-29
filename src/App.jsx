// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path if necessary
import Home from "./page/Home"; // Example of a Home component
import Docs from "./page/Docs"; // Example of a Docs component
import Components from "./page/Components"; // Example of a Components component
import About from "./page/About"; // Example of an About component
import Footer from "./components/Footer"; // Adjust the path if necessary
import { ThemeProvider } from "./components/ThemeContext";


const App = () => {
  return (
    <ThemeProvider>

    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/components" element={<Components />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />

    </Router>
    </ThemeProvider>

  );
};

export default App;
