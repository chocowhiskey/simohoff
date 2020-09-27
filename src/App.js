import React from "react";
import simone from "./images/simone.jpeg";
import location from "./images/location.jpg";
import workplace from "./images/workplace.jpg";
import project1 from "./images/project1.jpg";
import "./App.scss";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#111111" }}>
      {/* INTRODUCTION HEADER */}
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <div className="introduction-two-sentences">
            <p id="name">Simone</p>
            <p>is a Software Developer based in </p>
            <p id="location">Mannheim </p>
            <p>currently working at</p>
            <p id="workplace">Pathmate Technologies</p>

            <p>.</p>
            <p className="introduction-subtitle">
              Focused on product and visual design , passionate about gaming,
              technology and dogs
            </p>
            <img
              id="simone"
              src={simone}
              alt="Simone Hoffmann"
              style={{ alignContent: "center" }}
            />
            <img
              id="location-image"
              src={location}
              alt="Mannheim"
              style={{ alignContent: "center" }}
            />
            <img
              id="workplace-image"
              src={workplace}
              alt="Mafinex"
              style={{ alignContent: "center" }}
            />
          </div>
        </div>
        <p className="sticky-about">About</p>
      </header>
      {/* About - must be sticky */}
      {/* LATEST WORK */}
      <div className="latest-work">
        <p className="latest-work-background">Latest Work</p>
        <p className="latest-work-foreground">
          A selection of some projects I've been working on
        </p>
      </div>
      <div className="project1">
        <img
          id="project1"
          src={project1}
          alt="Project 1"
          style={{ alignContent: "center" }}
        />
        <p>Development</p>
        <p>Title of project</p>
        <p>Link to project</p>
      </div>
    </div>
  );
}

export default App;
