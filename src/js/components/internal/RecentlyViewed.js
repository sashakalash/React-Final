import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Slider from "react-slick";
import RESTapi from '../../RESTapi';

function NextArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`similar-products-slider__arrow similar-products-slider__arrow_right arrow`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`similar-products-slider__arrow similar-products-slider__arrow_left arrow`}
      onClick={onClick}
    />
  );
}

class RecentlyViewed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: []
    };

  }

  componentDidMount() {
    let item = sessionStorage.getItem('viewedItems');
    let sessionObject = item && JSON.parse(sessionStorage.getItem('viewedItems'));

    if (sessionObject && typeof sessionObject === 'object') {
      let productList = Object.values(sessionObject);
      this.setState({productList});
    }
  }

  render() {
    let settingsSmallSlider = {
      dots: false,
      className: "overlooked-slider",
      arrows: true,
      infinite: false,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1,
      focusOnSelect: true,
      verticalSwiping: false,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
    };

    let {productList} = this.state;

    if (!productList || !productList.length) {
      return null;
    }

    return (
      <section className="product-catalogue__overlooked-slider">
        <h3>Вы смотрели:</h3>
        <Slider
          {...settingsSmallSlider}
        >
          {productList.slice(0, 9).map((item) => {
            return (
              <div key={item.id}>
                <div className="overlooked-slider__item" style={{backgroundImage: `url(${item.images[0]})`}}>
                  <NavLink
                    to={`${RESTapi.getPathNames.products}${item.id}`}
                  />
                </div>
              </div>
            )
          })}
        </Slider>
      </section>
    );
  }
}

export default RecentlyViewed;
