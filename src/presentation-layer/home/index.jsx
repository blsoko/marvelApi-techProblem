import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Searchbar from "./Searchbar";
import Characters from "./Characters";
import Favorites from "./Favorites";
import { characterService } from "../../application/services/character.service";

import "./home.scss";

const totalPerPage = 10;

const Home = () => {
  const [characters, setCharacters] = useState();
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [activeNumberPage, setActiveNumberPage] = useState(0);
  const [windowsWidth] = useState(window.innerWidth);

  useEffect(() => {
    characterService
      .getAllByOffsetAndLimit(activeNumberPage)
      .then(({ results, total }) => {
        setCharacters(results);
        setTotalCharacters(total);
      });
  }, [activeNumberPage]);

  const handlePageClick = ({ selected }) => {
    setActiveNumberPage(selected * totalPerPage);
  };

  return (
    <main className="home">
      <Searchbar className="home__search-bar" />
      <div className="home__characters">
        <Characters className="" characters={characters} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageCount={totalCharacters}
          marginPagesDisplayed={2}
          pageRangeDisplayed={windowsWidth <= 560 ? 1: 4}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
        />
      </div>

      <Favorites className="home__favorites" />
    </main>
  );
};

export default Home;
