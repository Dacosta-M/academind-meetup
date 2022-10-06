import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorite-context";

import "./MainNavigation.css";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
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
            <Link to="/favorites"> My Favorites
              <span className="badge">
                {favoritesCtx.totalFavorites}
            </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
