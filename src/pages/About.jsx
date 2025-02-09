import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../assets/profile.jpg"; // Correct import path

const About = () => {
  return (
    <div className="container text-center mt-5 pt-5">
      {/* Profile Image */}
      <img 
        src={profileImage}  // Now correctly using the imported image
        alt="Jonathan Maxen" 
        className="rounded-circle border border-4 border-primary shadow-lg mb-4" 
        style={{ width: "150px", height: "150px" }}
      />

      {/* Title & Description */}
      <h2 className="fw-bold">Hello, I’m Jonathan Maxen</h2>
      <p className="lead text-muted">
        Originally from <strong>Charlotte, NC</strong>, back on the East Coast after spending 
        <strong> eight years in Los Angeles</strong>. I’m a big fan of <strong>books, vinyl records, 
        and movies</strong>, and I have a borderline unhealthy obsession with <strong>character actresses</strong>.
      </p>

      <p className="lead text-muted">
        Coding is kind of like collecting records for me—it starts with one cool thing, and suddenly, I’m deep in it,
        figuring out how it all works. I love the mix of <strong>logic and creativity</strong>, the problem-solving, 
        and the satisfaction of building something from scratch.
      </p>

      {/* Call-to-Action Buttons with Pill Style */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <a href="#portfolio" className="btn btn-lg btn-primary rounded-pill px-4">View My Work</a>
        <a href="#contact" className="btn btn-lg btn-outline-secondary rounded-pill px-4">Get in Touch</a>
      </div>
    </div>
  );
};

export default About;
