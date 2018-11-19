import RESTapi from "../../RESTapi";
import splitThousand from "../utils/splitThousand";
import React from 'react';
import {NavLink} from 'react-router-dom';

const SimilarProductCard = ({item, onClick}) => {
  if(!item) {
    return null;
  }

  return (
    <div className="similar-products-slider__item-list__item-card item">
      <div className="similar-products-slider__item">
        <NavLink to={`${RESTapi.getPathNames.products}${item.id}`} className="h3"
         onClick={onClick}
        >
          <img
            src={item.images[0]}
            className="similar-products-slider__item-pic-1" alt="Ботинки женские"/>
        </NavLink>
      </div>
      <div className="similar-products-slider__item-desc">
        <h4 className="similar-products-slider__item-name">{item.title}</h4>
        <p className="similar-products-slider__item-producer">Производитель:
          <span className="producer">{item.brand}r</span>
        </p>
        <p className="similar-products-slider__item-price">{splitThousand(item.price)}</p>
      </div>
    </div>
  )
};


export default SimilarProductCard;