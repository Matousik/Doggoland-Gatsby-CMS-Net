import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  
    return (
      <footer>
        <div className="content has-text-centered autor">
          <p>© Matouš Vondrák | Design: Šárka Löffelmanová</p>
        </div>
      </footer>
    );
};

export default Footer;
