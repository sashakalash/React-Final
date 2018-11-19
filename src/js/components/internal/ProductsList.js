import React, {Component} from 'react';
import ProductItem from './ProductItem';
import {withRouter } from 'react-router-dom';
import RESTapi from '../../RESTapi';

class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.searrchQuery = '';
  }

  getProducts(params = '') {
    RESTapi.get('products', params)
      .then((data) => {
        data.data && this.setState({products: data.data});
        data.goods && this.props.onCountChange(data.goods);
      });
  }

  componentWillReceiveProps(nextProps) {
    let search = nextProps.location.search;
    if(search !== this.searrchQuery) {
       this.getProducts(search.replace('?', ''));
       this.searrchQuery = search;
    }
  }

  componentDidMount() {
    let search = this.props.location.search.replace('?', '');
    this.getProducts(search);
    this.searrchQuery = search;
  }

  render() {
    let {products} = this.state;

    if(!products || !products.length) {
      return (
        <section className="product-catalogue__item-list product-catalogue__item-list_favorite">
          <div className="product-catalogue__placeholder">
            Товары не найдены, выберете другие параметры поиска
          </div>
        </section>
      )
    }

    return (
      <section className="product-catalogue__item-list product-catalogue__item-list_favorite">
        {products.map((product) =>  <ProductItem key={product.id} product={product}/> )}
      </section>
    );
  }
}

export default withRouter(ProductsList);

