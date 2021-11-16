import React from "react";
import PropTypes from "prop-types";

const SortByHeader = ({ sortOptions, handleSortBySelected }) => {
  // display inline flex
  // space-between
  return (
    <div>
      <h2>
        <img />
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
