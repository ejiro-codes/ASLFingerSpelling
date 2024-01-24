import React from "react";
import "../../static/footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mainFooter">
        <h1 className="footHeader">Thanks for Stopping by!!</h1>
        <ul className="socialUnordered">
          <li className="socialList">
            <a href="https://github.com/Ejiro-code" className="socials">
              <FaGithub />
            </a>
          </li>
          <li className="socialList">
            <a
              href="https://www.linkedin.com/in/ejiro-igun-/"
              className="socials"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="socialList">
            <a
              href="https://www.discordapp.com/users/551921284296998932"
              className="socials"
            >
              <FaDiscord />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
