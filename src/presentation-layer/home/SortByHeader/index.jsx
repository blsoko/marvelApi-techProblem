import React from "react";
import PropTypes from "prop-types";
import imagecharacter from "./../../../assets/characters.png";

import './style.scss';

const SortByHeader = ({ sortOptions, handleSortBySelected }) => {

  return (
    <div className="sortByHeader">
      <h2>
        <img 
          src={imagecharacter}
          alt=""
          className="sortByHeader__image-character"
        />
        Characters
      </h2>
      <select name="sortBy" id="sortBy" onChange={({target})=> handleSortBySelected(target.value)}>
        {sortOptions.map(({ value, name }, index) => (
          <option value={value} key={`select---${index}`}>{name}</option>
        ))}
      </select>
    </div>
  );
};

SortByHeader.propTypes = {
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default SortByHeader;
