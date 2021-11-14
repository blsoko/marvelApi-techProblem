import React, { useState } from "react";
import ComicDetailModal from "../ComicDetailModal";

import "./style.scss";

const CharacterCard = ({ character }) => {
  const [comicURI, setComicURI] = useState(false);
  const [comics] = useState(character.comics.items.splice(0, 4));

  return (
    <div className="character">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="character__image"
      />
      <div className="character__content">
        <h3 className="character__title">{character.name}</h3>
        <p className="character__description">
          {character.description === ""
            ? "no tengo nada"
            : character.description}
        </p>
        <button className="character__btn">Ver mas</button>
      </div>
      <div className="character__related">
        <h4 className="character__sub-title">Related comics</h4>
        {comics.map(({ name, resourceURI }, index) => (
          <p
            className="character__comic"
            key={`${character.id}-comic-${index}`}
            onClick={() => setComicURI(resourceURI)}
          >
            {name}
          </p>
        ))}
      </div>
      {comicURI && (
        <ComicDetailModal
          comicUri={comicURI}
          onClose={() => setComicURI(false)}
        />
      )}
    </div>
  );
};

export default CharacterCard;
