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
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import simone from "./images/simone.jpeg";
import location from "./images/location.jpg";
import project1 from "./images/project1.jpg";
import "./App.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a, Hover, button").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const cursorClasses = classNames("cursor", {
    "cursor--hidden": hidden,
    "cursor--clicked": clicked,
    "cursor--link-hovered": linkHovered,
  });

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

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
    <div
      className="App"
      style={{
        backgroundColor: "#111111",
        cursor: "url(./images/fat.cur),auto",
      }}
    >
      <Cursor />
      {/* INTRODUCTION HEADER */}
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <div className="introduction-two-sentences">
            <Hover hover="Simone" id="name" />
            <p>is a Software Developer</p>
            <p>based in</p>
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
            background: "#111111",
          })}
          className="sticky-about"
        >
          About
        </button>
        <Modal
          {...modalProps}
          className="modal-about"
          style={{ height: "100px", width: "auto" }}
        >
          <Cursor />
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
          <a href="https://github.com/chocowhiskey">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.xing.com/profile/Simone_Hoffmann61/">
            <FontAwesomeIcon icon={faXing} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/simohoff/">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
