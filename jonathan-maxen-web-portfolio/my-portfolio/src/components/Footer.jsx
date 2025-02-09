import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-0">
        © 2025 Jonathan Maxen | 
        <a href="https://github.com/jgmaxen" className="text-white mx-2">GitHub</a> | 
        <a href="https://linkedin.com/in/jgmaxen" className="text-white mx-2">LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
