import React, { useEffect, useState } from "react";
import { comicService } from "../../../application/services/comic.service";

import "./style.scss";

const ComicDetailModal = ({ comicUri, onClose }) => {
  const [comic, setComic] = useState();

  useEffect(() => {
    const splitComicUri  = comicUri.split("/");
    const comicId = splitComicUri[splitComicUri.length - 1 ];
    comicService.getById(comicId).then((comicResponse) => {
      setComic(comicResponse);
    });
  }, [comicUri]);

  if (comic) {
    return (
      <div className={`character-modal character-modal--open`}>
        <button className="character-modal__close-btn" onClick={onClose} >X</button>
        <div className="character-modal__container">
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className="character-modal__image" alt={comic.title} />
          <div className="character-modal__content">
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
          </div>
        </div>
        <div className="character-modal__actions">
          <button>Added to favorite</button>
          <button>Buy for $30 </button>
        </div>
      </div>
    );
  }

  return <p>Cargando...</p>;
};

export default ComicDetailModal;
