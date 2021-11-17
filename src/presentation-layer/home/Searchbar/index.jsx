import React from 'react'
import image from './../../../assets/marvel_logo.png';
import searchIcon from './../../../assets/search.png';

import './style.scss';

const Searchbar = ({input, className}) => {
    
    return (
        <div className={`search-bar ${className}`}>
            <img src={image} className="search-bar__image" alt="marvel" />
            <div className="search-bar__form-input">
            <img src={searchIcon} className="search-bar__input-icon" alt="search"/>
            <input placeholder='escriba su peli' className="search-bar__input" onInput={e => input(e.target.value)}/>
            
            </div>
        </div>
    )
}

export default Searchbar
