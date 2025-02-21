import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../images/sganji.jpg"; // Ensure the correct path to the image


const Portfolio = () => (
  <div className="container-fluid bg-dark text-white min-vh-100">
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient px-4 shadow-lg">
      {/* <a className="navbar-brand fw-bold fs-3" href="#">My Portfolio</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto">
          <a className="nav-link text-light" href="#about">About</a>
          <a className="nav-link text-light" href="#projects">Projects</a>
          <a className="nav-link text-light" href="#contact">Contact</a>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="text-center py-5 bg-gradient">
      <h1 className="display-3 fw-bold">Hello, I'm <span className="text-primary">Manikanta Ganji</span></h1>
      <p className="lead fst-italic">AI/ML Developer | Software Engineer | Tech Enthusiast</p>
      {/* <button className="btn btn-primary btn-lg mt-3 shadow">View My Work</button> */}
    </section>

    {/* About Section */}
    <section id="about" className="py-5 bg-secondary rounded-3 mx-3">
      <h2 className="h2 text-center">About Me</h2>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start">
        <img src={profileImage} alt="Profile" className="shadow me-md-4 mb-3 mb-md-0" style={{ borderRadius: '15px', width: '250px', height: '250px', objectFit: 'cover' }} />
        <div className="w-50">
          <p className="text-light">I am a passionate software developer with expertise in AI/ML, React, and backend systems. I enjoy building scalable applications and working on innovative projects that solve real-world problems. My focus is on writing clean, efficient code and collaborating with teams to deliver impactful solutions.</p>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="text-center py-5">
      <h2 className="h2">Projects</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-white shadow-lg border-light">
            <div className="card-body">
              <h5 className="card-title">Real Estate Price Prediction</h5>
              <p className="card-text">A multiple regression analysis project using Hyderabad real estate data.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-white shadow-lg border-light">
            <div className="card-body">
              <h5 className="card-title">YOLOv11 Object Detection</h5>
              <p className="card-text">Training YOLOv11 for ROS2 integration with TurtleSim.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="text-center py-5 bg-secondary rounded-3 mx-3">
      <h2 className="h2">Contact Me</h2>
      <p>Email: manikantaganjisde@gmail.com</p>
      {/* <p>LinkedIn: linkedin.com/in/yourprofile</p> */}
    </section>

    {/* Footer */}
    <footer className="text-center py-3 bg-gradient mt-4 shadow-lg">
      <p>Connect with me: <a className="text-light" href="https://www.linkedin.com/in/manikanta-ganji-86240399/" target="_blank">LinkedIn</a> 
      | <a className="text-light" href="https://github.com/manikanta55" target="_blank">GitHub</a></p>
    </footer>
  </div>
);

export default Portfolio;
