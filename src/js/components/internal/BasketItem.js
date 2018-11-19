import React, {Component} from 'react';

class BasketItem extends Component {
  render() {
    return (
      <div className="product-list__item">
        <a className="product-list__pic">
          <img src="/img/product-list__pic_1.jpg" alt="product"/>
        </a>
        <a href="#" className="product-list__product">Ботинки женские, Baldinini</a>
        <div className="product-list__fill"></div>
        <div className="product-list__price">12 360
          <i className="fa fa-rub" aria-hidden="true"></i>
        </div>
        <div className="product-list__delete">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default BasketItem;

