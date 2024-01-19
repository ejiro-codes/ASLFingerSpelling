import React from "react";
import { Link } from "react-router-dom";
import "../static/index.css";
import About from "../routes/About";
import Challenges from "../routes/Challenges";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <h3 className="navHeader">
          <span style={{ fontSize: "2.5rem" }}>✌</span> FINGER SPELLING
          CLASSIFIER
        </h3>
        <ul className="navList">
          <li>
            <Link to="/about"> ABOUT </Link>
          </li>
          <li>
            <Link to="/challenges"> CHALLENGES </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
