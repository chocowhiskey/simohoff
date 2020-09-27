import React from "react";
import simone from "./images/simone.jpeg";
import location from "./images/location.jpg";
import workplace from "./images/workplace.jpg";
import project1 from "./images/project1.jpg";
import "./App.scss";

function Title(props) {
  return (
    <div className="latest-work">
      <p className="latest-work-background">{props.background}</p>
      <p className="latest-work-foreground">{props.foreground}</p>
    </div>
  );
}

function Project(props) {
  return (
    <div className="project1">
      <img
        id="project1"
        src={props.project1}
        alt="Project 1"
        style={{ alignContent: "center" }}
      />
      <p className="project1-development">Development</p>
      <p className="project1-title">{props.title}</p>
      <p className="project1-link">See project</p>
    </div>
  );
}

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
              Focused on product and visual design, passionate about gaming,
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
      {/* LATEST WORKS */}
      <Title
        background="Latest Work"
        foreground="A selection of some projects I've been working on"
      />
      {/* PROJECTS to insert with Project function */}
      <Project title="My favorite project" project1={project1} />
      <Title
        background="Just for fun"
        foreground="Some personal projects made mostly for fun"
      />
    </div>
  );
}

export default App;
