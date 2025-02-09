import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import About from "./pages/About";
import ErrorBoundary from "./ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
