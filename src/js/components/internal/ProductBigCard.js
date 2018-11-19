import React, {Component} from 'react';
import splitThousand from '../utils/splitThousand';
import Slider from "react-slick";

function SampleNextArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down`}
      onClick={onClick}
    />
  );
}


class ProductBigCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nav1: null,
      nav2: null
    };

    this.onSlideClick = this.onSlideClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  componentWillReceiveProps(nextProps) {
    let {product} = nextProps;

    this.writeToSessionStorage(product);
  }

  writeToSessionStorage(product = null) {
    if (!product || !product.id) {
      return;
    }

    let viewedItemsKey = 'viewedItems';
    let sessionObject = JSON.parse(sessionStorage.getItem(viewedItemsKey));

    if (sessionObject && typeof sessionObject === 'object') {
      sessionObject[product.id] = product;
      sessionStorage.setItem(viewedItemsKey, JSON.stringify(sessionObject));
      return;
    }

    let obj = {};
    obj[product.id] = product;
    sessionStorage.setItem(viewedItemsKey, JSON.stringify(obj));
  }

  onSlideClick(index = 0) {
    this.state.nav2 && this.state.nav2.slickGoTo(index);
  }

  render() {
    let {product} = this.props;

    if (!product) {
      return (
        <main className="product-card">
          <section className="product-card-content">
            <div className="ta-c">
              Загрузка...
            </div>
          </section>
        </main>
      )
    }

    let settingsSmallSlider = {
      dots: false,
      className: "favourite-product-slider",
      arrows: true,
      infinite: false,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      focusOnSelect: true,
      verticalSwiping: true,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      beforeChange: (prevIndex, nextIndex) => {
        // console.log(nextIndex);
      }
    };

    return (
      <main className="product-card">
        <section className="product-card-content">
          <h2 className="section-name">{product.type}</h2>
          <section className="product-card-content__main-screen">
            <section className="main-screen__favourite-product-slider">
              <Slider
                {...settingsSmallSlider}
                ref={slider => {
                  this.state.nav1 = slider;
                  this.slider1 = slider;
                }}
                asNavFor={this.state.nav2}
              >
                {product.images && product.images.map((image, index) => {
                  return (
                    <img key={image} className={'favourite-product-slider__item'}
                         src={image} alt={product.title + index}
                         onClick={() => this.onSlideClick(index)}
                    />
                  )
                })}
              </Slider>
            </section>
            <div className="main-screen__favourite-product-pic">
              <div>
                <Slider
                  ref={slider => {
                    this.slider2 = slider;
                    this.state.nav2 = slider;
                  }}
                  slidesToShow={1}
                  swipe
                  infinite={false}
                  asNavFor={this.state.nav1}
                  fade
                >
                  {product.images && product.images.map((image, index) => {
                    return (
                      <img key={image} src={image} alt={product.title + index}/>
                    )
                  })}
                </Slider>
              </div>
              {/*<a href="#" className="main-screen__favourite-product-pic__zoom"></a>*/}
            </div>
            <div className="main-screen__product-info">
              <div className="product-info-title"><h2>{product.title}</h2>
                <div className="in-stock">В наличии</div>
              </div>
              <div className="product-features">
                <table className="features-table">
                  <tbody>
                  <tr>
                    <td className="left-col">Артикул:</td>
                    <td className="right-col">{product.id}</td>
                  </tr>
                  <tr>
                    <td className="left-col">Производитель:</td>
                    <td className="right-col"><a href="#"><span className="producer">{product.brand}</span></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-col">Цвет:</td>
                    <td className="right-col">{product.color}</td>
                  </tr>
                  <tr>
                    <td className="left-col">Материалы:</td>
                    <td className="right-col">{product.material}</td>
                  </tr>
                  <tr>
                    <td className="left-col">Сезон:</td>
                    <td className="right-col">{product.season}</td>
                  </tr>
                  <tr>
                    <td className="left-col">Повод:</td>
                    <td className="right-col">{product.reason}</td>
                  </tr>
                  <tr>
                    <td className="left-col">Популярность:</td>
                    <td className="right-col">{product.popularity}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <p className="size">Размер</p>
              <ul className="sizes">
                {product.sizes && product.sizes.map((item, index) => {
                  let className = !index ? 'active' : '';
                  return (
                    <li className={className} key={item.size}><a href="#">{item.size}</a></li>
                  )
                })}
              </ul>
              <div className="size-wrapper">
                <a href="#"><span className="size-rule"></span><p className="size-table">Таблица
                  размеров</p></a>
              </div>
              <a href="#" className="in-favourites-wrapper">
                <div className="favourite" href="#"></div>
                <p className="in-favourites">В избранное</p>
              </a>
              <div className="basket-item__quantity">
                <div
                  className="basket-item__quantity-change basket-item-list__quantity-change_minus">-
                </div>
                1
                <div
                  className="basket-item__quantity-change basket-item-list__quantity-change_plus">+</div>
              </div>
              <div className="price">{splitThousand(product.price)} ₽</div>
              <button className="in-basket in-basket-click">В корзину</button>
            </div>
          </section>
        </section>
      </main>
    );
  }
}

export default ProductBigCard;