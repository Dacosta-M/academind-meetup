import React, { useContext } from "react";
import Card from "../ui/Card";
import "./MeetupItem.css";
import  FavoritesContext  from "../../store/favorite-context";

const MeetupItem = ({ title, image, address, description, id }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
  const toggleFavoriteStatushandeler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavourite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        title: title,
        description: description,
        image: image,
        address: address,
      });
    }
  }
    return (
      <li className="item">
        <Card>
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
          </div>
          <div className="actions">
            <button onClick={toggleFavoriteStatushandeler}>
              {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
            </button>
          </div>
        </Card>
      </li>
    );
  };
  export default MeetupItem;
