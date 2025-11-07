import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-header">
      <p>
        &copy; <Link to="https://thapelo-lebea.netlify.app" target="_blank" rel="noopener noreferrer">THAPELO LEBEA</Link>
      </p>
    </footer>
  );
};

export default Footer;
