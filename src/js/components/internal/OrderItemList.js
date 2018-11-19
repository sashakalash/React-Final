import React, {Component} from 'react';
import OrderItem from '../internal/OrderItem';

class OrderItemList extends Component {
  render() {
    return (
      <div className="order-basket__item-list">
        <OrderItem/>
        <OrderItem/>
      </div>
    );
  }
}

export default OrderItemList;

