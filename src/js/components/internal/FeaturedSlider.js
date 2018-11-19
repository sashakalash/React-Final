import React, {Component} from 'react';
import Slider from "react-slick";
import {NavLink} from 'react-router-dom';
import RESTapi from '../../RESTapi';

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className={`new-deals__arrow new-deals__arrow_right slider__arrow arrow`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className={`new-deals__arrow new-deals__arrow_left slider__arrow arrow`}
      onClick={onClick}
    />
  );
}

class FeaturedSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: false
    }

  }

  showItemInfo(currentItem = false) {
    this.setState({currentItem})
  }

  componentWillReceiveProps(nextProps) {
    nextProps.list && this.showItemInfo(nextProps.list[0]);
  }

  render() {
    let list = this.props.list;
    let currentItem = this.state.currentItem;

    let settings = {
      dots: false,
      className: "new-deals__slider-wrapper",
      arrows: true,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      swipeToSlide: false,
      centerMode: true,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: (prevIndex, index) => {
        list[index] && this.showItemInfo(list[index]);
      }
    };

    return (
        <div className="new-deals__slider">

          <Slider {...settings}>
          {list && list.map((item) => {
            return (
              <div key={item.id} className="new-deals__product">
                <NavLink to={`${RESTapi.getPathNames.products}${item.id}`} className="h3" style={ { backgroundImage: `url(${item.images[0]})` } }>
                </NavLink>
                <div className="new-deals__product_favorite"></div>
              </div>
            )
          })}
          </Slider>
          {!currentItem && <div className="new-deals__product-info">Новинки ожидаются в ближайшее время</div>}
          {currentItem &&
            <div className="new-deals__product-info">
              <NavLink to="/products/?id=1" className="h3">
                {currentItem.title}
              </NavLink>
              <p>Производитель:
                <span> {currentItem.brand}</span>
              </p>
              <h3 className="h3">{currentItem.price} ₽</h3>
            </div>
          }
        </div>
    );
  }
}

export default FeaturedSlider;
