import React from "react";
import CharacterCard from "./CharacterCard";

const Characters = ({ className, characters }) => {

  return (
    <section className={className}>
      {characters &&
        characters.map((character) => (
          <CharacterCard character={character}

          key={character.id}  />
        ))}
    </section>
  );
};

export default Characters;
