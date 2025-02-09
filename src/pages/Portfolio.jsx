import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Images
import weatherImg from "../assets/weather.jpg";
import employeeImg from "../assets/employee.jpg";
import vehicleImg from "../assets/vehicle.jpg";
import colorImg from "../assets/color.jpg";
import readmeImg from "../assets/readme.jpg";
import taskmanagerImg from "../assets/taskmanager.jpg";

const projects = [
  { id: 1, title: "Weather Dashboard", img: weatherImg, github: "https://github.com/jgmaxen/forecastly" },
  { id: 2, title: "Employee Tracker", img: employeeImg, github: "https://github.com/jgmaxen/hirewire" },
  { id: 3, title: "Vehicle Builder", img: vehicleImg, github: "https://github.com/jgmaxen/vroomCLI" },
  { id: 4, title: "Color Palette Generator", img: colorImg, github: "https://github.com/jgmaxen/Color-Code-Palette" },
  { id: 5, title: "Social Media API", img: readmeImg, github: "https://github.com/jgmaxen/READMEgenerator" },
  { id: 6, title: "Task Manager App", img: taskmanagerImg, github: "https://github.com/your-repo" }
];

const Portfolio = () => {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "var(--primary)", fontSize: "2.5rem" }}>My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card shadow-sm border-3 border-dark rounded">
              <img src={project.img} className="card-img-top" alt={project.title} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold" style={{ color: "var(--dark)" }}>{project.title}</h5>
                <a href={project.github} className="btn btn-primary rounded-pill me-2" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
