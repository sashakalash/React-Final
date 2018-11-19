import React, {Component} from 'react';

class OrderItem extends Component {
  render() {
    return (
      <div className="basket-item">
        <div className="basket-item__pic">
          <img src="/img/catalogue-pics/product-catalogue__item-1.png" alt="product_1"/>
        </div>
        <div className="basket-item__product">
          <div className="basket-item__product-name"><a href="#">Босоножки женские</a></div>
          <div className="basket-item__product-features">
            <div className="basket-item__size">Размер: <span>37</span></div>
            <div className="basket-item__producer">Производитель: <span>Albano</span></div>
            <div className="basket-item__color">Цвет: <span>Черный</span></div>
          </div>
        </div>
        <div className="basket-item__quantity">
          <div
            className="basket-item__quantity-change basket-item-list__quantity-change_minus">-
          </div>
          1
          <div
            className="basket-item__quantity-change basket-item-list__quantity-change_plus">+</div>
        </div>
        <div className="basket-item__price">
          5 950 руб.
          <i className="fa fa-rub" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default OrderItem;

