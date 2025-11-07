import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <h1>Welcome {props.user}</h1>
      </div>

      <div className="navbar-right">
        <Link to="/profile" className="nav-btn">
          ⚙️ Profile
        </Link>
        <button className="nav-btn logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
