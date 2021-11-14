import React from 'react'
import image_delete from "./../../../assets/btn-delete.png";
import image_marvel from "./../../../assets/marvel_logo.png";
import "./style.scss";

const Favorites = ({className}) => {
    return (
        <aside className={`favorites ${className}`}>
          <div className="favorites">
            <div className="favorites__imgcontainer">
              <img src={image_delete} alt="" className="favorites__image-thrash" />
              <img src={image_marvel} alt="" className="favorites__image" />
            </div>
            <h4 className="favorites__title">SPIDER-MAN aaaaaaaaaaaaaaaaaa</h4>
            <div className="favorites__imgcontainer">
              <img src={image_delete} alt="" className="favorites__image-thrash" />
              <img src={image_marvel} alt="" className="favorites__image" />
            </div>
            <h4 className="favorites__title">SPIDER-MAN aaaaaaaaaaaaaaaaaa</h4>
            
          </div>
        </aside>
    )
}

export default Favorites
