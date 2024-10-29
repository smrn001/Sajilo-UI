// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path if necessary
import Home from "./page/Home"; // Example of a Home component
import Docs from "./page/Docs"; // Example of a Docs component
import Components from "./page/Components"; // Example of a Components component
import About from "./page/About"; // Example of an About component
import Footer from "./components/Footer"; // Adjust the path if necessary
import { ThemeProvider } from "./components/ThemeContext";
import HeaderComponent from "./page/components/HeaderComponent";
import FooterComponent from "./page/components/FooterComponent";
import ButtonComponent from "./page/components/ButtonComponent";
import CardComponent from "./page/components/CardComponent";
import NotFoundPage from "./page/NotFoundPage"; // Adjust the path accordingly
import EnjoySajhiloUI from "./components/EnjoySajhiloUI";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <EnjoySajhiloUI/>
        <main className="min-h-screen bg-white dark:bg-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/header" element={<HeaderComponent />} />
            <Route path="/components/buttons" element={<ButtonComponent />} />
            <Route path="/components/cards" element={<CardComponent />} />
            <Route path="/components/footer" element={<FooterComponent />} />
            <Route path="/about" element={<About />} />
            <Route element={<NotFoundPage />} path="*" />
            {/* This will catch all unmatched routes */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
