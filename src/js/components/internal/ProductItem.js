import React, {Component} from 'react';
import RESTapi from "../../RESTapi";
import {NavLink} from 'react-router-dom';
import splitThousand from '../utils/splitThousand';
import Slider from "react-slick";


function  NextArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`arrow arrow_left`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`arrow arrow_right`}
      onClick={onClick}
    />
  );
}



class ProductItem extends Component {
  render() {
    let {product} = this.props;

    if(!product) {
      return null;
    }

    return (
      <NavLink to={`${RESTapi.getPathNames.products}${product.id}`} className="item-list__item-card item">
        <Slider
          slidesToShow={1}
          nextArrow={<NextArrow/>}
          prevArrow={<PrevArrow/>}
          swipe
          arrows
          infinite={false}
          fade
        >
          {product.images && product.images.map((image) => {
            return (
              <div key={image} className="item-pic" onClick={(e) => e.stopPropagation()}>
                <div className="item-pic-1" style={{backgroundImage: `url(${image})`}}>
                </div>
              </div>
            )
          })}
        </Slider>
        <div className="product-catalogue__product_favorite">
          <p></p>
        </div>
        <div className="item-desc">
          <h4 className="item-name">{product.title}</h4>
          <p className="item-producer">Производитель: <span className="producer">{product.brand}</span></p>
          <p className="item-price">{splitThousand(product.price)}</p>

          {product.sizes &&
            <div className="sizes">
              <p className="sizes__title">Размеры в наличии:</p>
              <p className="sizes__avalible">
                  product.sizes.map((item) => item.size)}
              </p>
            </div>
          }
        </div>
      </NavLink>
    );
  }
}

export default ProductItem;

