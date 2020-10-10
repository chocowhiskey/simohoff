import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import React from "react";

import simone from "./images/simone.jpeg";
import location from "./images/location.jpg";
import project1 from "./images/project1.jpg";
import "./App.scss";

function Hover(props) {
  return <p id={props.id}>{props.hover}</p>;
}

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
  const { modalProps, getTriggerProps } = useModal();

  return (
    <div className="App" style={{ backgroundColor: "#111111" }}>
      {/* INTRODUCTION HEADER */}
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <div className="introduction-two-sentences">
            <Hover hover="Simone" id="name" />
            <p>is a Software Developer based in </p>
            <Hover hover="Mannheim" id="location" />
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
          </div>
        </div>
        <button
          {...getTriggerProps({
            background: "#666",
          })}
          className="sticky-about"
        >
          About
        </button>
        <Modal
          {...modalProps}
          className="modal-about"
          style={{ backgroundColor: "blue", height: "100px", width: "auto" }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              id="simone-modal"
              src={simone}
              alt="Simone Hoffmann"
              style={{ alignContent: "center" }}
            />
            <div className="about-description">
              <h1 className="latest-work-background">About</h1>
              <p>
                <bold className="about-bold">
                  Simone is Software Developer based in Mannheim, currently
                  working at Pathmate Technologies.
                </bold>
              </p>
              <br />
              <p className="about-not-bold">
                Originally from the beautiful Odenwald, I’ve been working as a
                software developer since 2019. I'm currently working at Pathmate
                Technologies as Software Developer. Find me here for work stuff,
                here for some design shots, here for a few nice pictures and
                here for some quick tweets.
              </p>
            </div>
          </div>
        </Modal>
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
      <Project title="My favorite project" project1={project1} />
      {/* CONTACT */}
      <div>
        <div className="contact">
          <Title
            background="Get in touch"
            foreground="Drop me a message and let's talk!"
          />
          <a href="https://github.com/chocowhiskey" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.xing.com/profile/Simone_Hoffmann61/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faXing} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/simohoff/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
