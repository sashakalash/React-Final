import React, {Component} from 'react';
import BasketItem from './BasketItem';
import shortId from 'shortid';

class BasketItemList extends Component {
  render() {
    return (
      <div className="basket-dropped__product-list product-list">
        <BasketItem key={shortId.generate()}/>
        <BasketItem key={shortId.generate()}/>
        <BasketItem key={shortId.generate()}/>
        <BasketItem key={shortId.generate()}/>
        <BasketItem key={shortId.generate()}/>
        <BasketItem key={shortId.generate()}/>
      </div>
    );
  }
}

export default BasketItemList;

