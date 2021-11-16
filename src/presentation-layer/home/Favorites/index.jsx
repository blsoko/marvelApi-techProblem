import React, { useEffect, useState } from "react";
import imagedelete from "./../../../assets/btn-delete.png";
import { favoriteService } from "../../../application/services/favorite.service";

import "./style.scss";

const Favorites = ({ className }) => {
  const [favorites, setFavorites] = useState([]);
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    setInterval(() => {
      favoriteService.getAll().then((favoriteResponse) => {
        setFavorites(favoriteResponse);
      });
    }, 1000);
  }, []);
  
  const handleDeleteComic = (id) => {
    favoriteService.deleteById(id);
    setFlag(flag + 1);
  }

  return (
    <aside className={`favorites ${className}`}>
      {favorites.length > 0 &&
        favorites.map(({ thumbnail, title, id }) => (
          <div className="favorite" key={id}>
            <button
              className="favorite__btn-delete"
              onClick={()=> handleDeleteComic(id)}
            >
              <img
                src={imagedelete}
                alt=""
                className="favorite__image-thrash"
              />
            </button>
            <img
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt=""
              className="favorite__image"
            />
            <h4 className="favorite__title">{title}</h4>
          </div>
        ))}
    </aside>
  );
};

export default Favorites;
