import React from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup"> Add new meetup</Link>
          </li>
          <li>
            <Link to="/favorites"> My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
