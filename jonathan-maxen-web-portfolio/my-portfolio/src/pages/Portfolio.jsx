import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
    { id: 1, title: "Weather Dashboard", img: "/assets/weather.jpg", github: "https://github.com/jgmaxen/forecastly" },
    { id: 2, title: "Employee Tracker", img: "/assets/employee.jpg", github: "https://github.com/jgmaxen/hirewire" },
    { id: 3, title: "Vehicle Builder", img: "/assets/vehicle.jpg", github: "https://github.com/jgmaxen/vroomCLI" },
    { id: 4, title: "Color Palette Generator", img: "/assets/color.jpg", github: "https://github.com/jgmaxen/Color-Code-Palette" },
    { id: 5, title: "Social Media API", img: "/assets/readme.jpg", github: "https://github.com/jgmaxen/READMEgenerator" },
    { id: 6, title: "Task Manager App", img: "/assets/taskmanager.jpg", github: "https://github.com/your-repo" }
];

const Portfolio = () => {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center fw-bold mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card shadow-sm border-0">
              <img src={project.img} className="card-img-top" alt={project.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <a href={project.github} className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
