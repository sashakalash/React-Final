import React, {Component} from 'react';
import Slider from "react-slick";
import RESTapi from '../../RESTapi';
import SimilarProductCard from './SimilarProductCard';
import qs from 'qs';

const {stringify, parse} = qs;

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

class SimilarProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.params = {
      type: '',
      color: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    let {product} = nextProps;

    if (!product) {
      return
    }

    this.params.type = product.type;
    this.params.color = product.color;

    let queryParams = stringify(this.params);
    this.getProductList(queryParams);
  }

  getProductList(query = '') {
    RESTapi.get('products', query)
      .then((data) => {
        data && data.data && this.setState({
          products: data.data
        });
      })
  }

  render() {
    let {products} = this.state;

    let settingsSmallSlider = {
      dots: false,
      className: "",
      arrows: true,
      infinite: false,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      verticalSwiping: true,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      beforeChange: (prevIndex, nextIndex) => {
      }
    };

    if (!products || !products.length) {
      return null;
    }

    return (
      <section className="product-card__similar-products-slider">
        <h3>Похожие товары:</h3>
        <Slider
          {...settingsSmallSlider}
        >
          {products.map((item) => <SimilarProductCard
            key={item.id}
            item={item}
          />)}
        </Slider>
      </section>
    );
  }
}

export default SimilarProducts;
