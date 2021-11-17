import React, { useEffect, useState } from "react";
import { comicService } from "../../../application/services/comic.service";
import { favoriteService } from "../../../application/services/favorite.service";
import imageclose from "./../../../assets/btn-close.png";
import imageshopcart from "./../../../assets/btn-favourites-default.png";
import imageshopcart2 from "./../../../assets/btn-favourites-primary.png";
import imagefavourites from "./../../../assets/shopping-cart-primary.png";

import "./style.scss";

const ComicDetailModal = ({ comicUri, onClose }) => {
  const [comic, setComic] = useState();
  const [isComicSaved, setIsComicSaved] = useState(false);

  useEffect(() => {
    const splitComicUri = comicUri.split("/");
    const comicId = splitComicUri[splitComicUri.length - 1];
    comicService.getById(comicId).then((comicResponse) => {
      setComic(comicResponse);
    });
  }, [comicUri]);

  const hanldeOnSubmit = (param) => {
    setIsComicSaved(param);
  };

  if (comic) {
    return (
      <>
      <div className={`character-modal character-modal--open`}>
        <button className="character-modal__close-btn" onClick={onClose}>
          <img
            src={imageclose}
            alt={comic.name}
            className="character-modal__image-close"
          />
        </button>
        <div className="character-modal__container">
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            className="character-modal__image"
            alt={comic.title}
          />
          <div className="character-modal__content">
            <h2>{comic.title}</h2>
            <p dangerouslySetInnerHTML={{__html: comic.description}}></p>
          </div>
        </div>
        <div className="character-modal__actions">
          <button onClick={() => favoriteService.save(comic, hanldeOnSubmit)} className={isComicSaved ? "added": ""}>
            <img
              src={isComicSaved ? imageshopcart2 : imageshopcart}
              alt=""
              className="favorite__image-shopcart"
            />
            {isComicSaved ? "Added" : "Add"} to favourite
          </button>
          <button>
            <img
              src={imagefavourites}
              alt=""
              className="favorite__image-favourites"
            />
            BUY FOR{comic.prices[1] ? `$${comic.prices[1].price}` : "$0"}
          </button>
        </div>
      </div>
      <div className="overlay"></div>
      </>
    );
  }

  return <p>Cargando...</p>;
};

export default ComicDetailModal;
