import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Searchbar from "./Searchbar";
import Characters from "./Characters";
import Favorites from "./Favorites";
import SortByHeader from "./SortByHeader";

import { characterService } from "../../application/services/character.service";
import "./home.scss";

const totalPerPage = 10;

const sortByOptions = [
  { value: "name", name: "ASC name" },
  { value: "modified", name: "ASC modified" },
  { value: "-name", name: "DESC name" },
  { value: "-modified", name: "DESC modified" },
];
const Home = () => {
  const [characters, setCharacters] = useState();
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [activeNumberPage, setActiveNumberPage] = useState(0);
  const [windowsWidth] = useState(window.innerWidth);
  const [sortBy, setSortBy] = useState(sortByOptions[0].value);
  const [input, setInput] = useState("");

  useEffect(() => {
    characterService
      .getAllByOffsetAndLimit(input,activeNumberPage, sortBy)
      .then(({ results, total  }) => {
        setCharacters(results);
        setTotalCharacters(total);
      }).catch(console.error);
  }, [activeNumberPage, input, sortBy]);

  const handlePageClick = ({ selected }) => {
    setActiveNumberPage(selected * totalPerPage);
  };

  return (
    <main className="home">
      <Searchbar input={setInput} className="home__search-bar" />
      <div className="home__characters">
        <SortByHeader sortOptions={sortByOptions} handleSortBySelected={setSortBy} />
        <Characters className="" characters={characters} />
        <ReactPaginate
          breakLabel="..."
          className="home__paginate"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageCount={totalCharacters}
          marginPagesDisplayed={1}
          pageRangeDisplayed={windowsWidth <= 560 ? 1 : 4}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>

      <Favorites className="home__favorites" />
    </main>
  );
};
export default Home;
