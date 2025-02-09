import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "./index.css"; 

const NotFound = () => (
  <div className="text-center p-10">
    <h2 className="text-3xl font-bold text-red-600">404 - Page Not Found</h2>
    <p className="mt-4">Oops! The page you’re looking for doesn’t exist.</p>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <Routes>  {/* ✅ No BrowserRouter here, just Routes */}
            <Route path="/" element={<About />} /> {/* Default Page */}
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
