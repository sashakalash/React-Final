import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import SearchForm from "../internal/SearchForm";
import Basket from "../internal/Basket";
import RESTapi from '../../RESTapi';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import qs from 'qs';
const {stringify, parse} = qs;

let activeHeaderItemClass = 'main-menu__item_active';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenBasket: false,
      isOpenSearch: false,
      basketItemsCount: 1
    };

    this.toggleBasketOpen = this.toggleBasketOpen.bind(this);
    this.toggleSearchOpen = this.toggleSearchOpen.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
  }

  toggleBasketOpen() {
    this.setState({
      isOpenBasket: !this.state.isOpenBasket
    });
  }

  toggleSearchOpen() {
    this.setState({
      isOpenSearch: !this.state.isOpenSearch
    });
  }

  onSearchChange(e) {
    let value = e.currentTarget.value;
    console.log(`значение поиска ${value}`);
  }

  onCategoryChange(queryString) {
    console.log(queryString);
  }

  render() {
    let search = this.props.location.search;

    let categoriesLinks = this.props.categories && this.props.categories.map((item) => {
      let searchItemParams = `?categoryId=${item.id}`;
      return (
        <li key={item.id}
            className={`main-menu__item main-menu__item_women ${searchItemParams === search ? activeHeaderItemClass : ''}`}>
          <NavLink exact to={`${RESTapi.getPathNames.products}${searchItemParams}`}>
            {item.title}
          </NavLink>
        </li>
      )
    });

    return (
      <header className="header">
        <div className="top-menu">
          <div className="wrapper">
            <ul className="top-menu__items">
              <li className="top-menu__item">
                <a href="#">Возврат</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Доставка и оплата</a>
              </li>
              <li className="top-menu__item">
                <a href="#">О магазине</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Контакты</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Новости</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-main">
          <div className="header-main__wrapper wrapper">
            <div className="header-main__phone">
              <a href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
              <p>Ежедневно: с 09-00 до 21-00</p>
            </div>
            <div className="header-main__logo">
              <NavLink exact to="/">
                <h1>
                  <img src="/img/header-logo.png" alt="logotype"/>
                </h1>
              </NavLink>
              <p>Обувь и аксессуары для всей семьи</p>
            </div>
            <div className="header-main__profile">
              <div className="header-main__pics">
                <div
                  onClick={this.toggleSearchOpen}
                  className={`header-main__pic header-main__pic_search ${this.state.isOpenSearch ? "header-main__pic_search_is-hidden" : ""}`}
                >

                </div>
                <div className="header-main__pic_border"></div>
                <NavLink exact to="/favorite/">
                  <div className="header-main__pic header-main__pic_profile">
                    <div className="header-main__pic_profile_menu"></div>
                  </div>
                </NavLink>
                <div className="header-main__pic_border"></div>
                <div className={`header-main__pic header-main__pic_basket`} onClick={this.toggleBasketOpen}>
                  <div
                    className={`header-main__pic_basket_full
                    ${this.state.basketItemsCount ? "header-main__pic_basket_full_is-active" : ""}`}>
                    {this.state.basketItemsCount}
                  </div>
                  <div
                    className={`header-main__pic_basket_menu
                    ${this.state.isOpenBasket ? "header-main__pic_basket_menu_is-active" : ""}`}>
                  </div>
                </div>
              </div>
              <SearchForm
                isOpen={this.state.isOpenSearch}
                onChange={this.onSearchChange}
              />
            </div>

          </div>
          <Basket
            isOpen={this.state.isOpenBasket}
            handleClick={this.toggleBasketOpen}
            basketItemsCount={this.state.basketItemsCount}
          />
        </div>
        <nav className="main-menu">
          <div className="wrapper">
            <ul className="main-menu__items">
              <li className={`main-menu__item main-menu__item_sales ${search === '?discount' ? activeHeaderItemClass : ''}`}>
                <NavLink
                  exact to={`${RESTapi.getPathNames.products}?discount`}
                  onClick={() => {this.props.onChangeFilter('discount')}}
                >
                  Акции
                </NavLink>
              </li>

              {categoriesLinks}

              <li className={`main-menu__item main-menu__item_sales ${search === '?featured' ? activeHeaderItemClass : ''}`}>
                <NavLink
                  exact to={`${RESTapi.getPathNames.products}?featured`}
                  onClick={() => {this.props.onChangeFilter('featured')}}
                >
                  Новинки
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.defaultProps = {
  categories: []
};

Header.propTypes = {
  categories: PropTypes.array.isRequired
};

export default withRouter(Header);
