import React from 'react'
import image from './../../../assets/marvel_logo.png';

import './style.scss';

const Searchbar = ({className}) => {
    return (
        <div className={`search-bar ${className}`}>
            <img src={image} className="search-bar__image" />
            <div className="search-bar__form-input">
            <input placeholder='escriba su peli' className="search-bar__input" />
            
            </div>
        </div>
    )
}

export default Searchbar
