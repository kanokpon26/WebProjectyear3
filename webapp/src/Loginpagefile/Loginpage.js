import React from "react";
// import { Link } from "react-router-dom";
import "./Loginpage.css";
import MainContent from "./MainContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Loginpage = () => {
  return (
    <div>
      <header></header>
      <MainContent />
      <footer>
        <p className="text-center">Copyright &copy; Peemopas 2020</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCalculator} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Loginpage;
