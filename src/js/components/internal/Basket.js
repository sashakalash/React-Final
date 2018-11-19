import React, {Component} from 'react';
import BasketItemList  from './BasketItemList';
import { NavLink } from 'react-router-dom';

class Basket extends Component {
  constructor(props) {
    super(props);

    this.closeBasket = this.closeBasket.bind(this);
  }

  closeBasket(e, preventDefault=true) {
    if(preventDefault) {
      e.preventDefault();
    }
    this.props.handleClick && this.props.handleClick();
  }

  render() {
    return (
        <div className={`header-main__hidden-panel hidden-panel ${this.props.isOpen ? "header-main__hidden-panel_visible": ""}`}>
            {!!this.props.basketItemsCount &&
              <div>
                <div className="hidden-panel__profile hidden-panel__profile_visible">
                  <a href="#">Личный кабинет</a>
                  <NavLink to="/favorite/">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>Избранное
                  </NavLink>
                  <a href="#" onClick={this.closeBasket}>Выйти</a>
                </div>
                <div className="hidden-panel__basket basket-dropped hidden-panel__basket_visible">
                  <div className="basket-dropped__title">В вашей корзине:</div>
                  <BasketItemList/>
                  <NavLink to="/order/" className="basket-dropped__order-button" onClick={(e) => {this.closeBasket(e, false)}}>
                    Оформить заказ
                  </NavLink>
                </div>
              </div>
            }

            {!this.props.basketItemsCount &&
              <NavLink to="/products/" onClick={(e) => {this.closeBasket(e, false)}}>
                В корзине пока ничего нет. Не знаете, с чего начать? Посмотрите наши новинки!
              </NavLink>
            }
        </div>
    );
  }
}

export default Basket;
