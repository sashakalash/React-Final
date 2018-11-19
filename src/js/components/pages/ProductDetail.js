import React, {Component} from 'react';
import RecentlyViewed from '../internal/RecentlyViewed';
import SimilarProducts from '../internal/SimilarProducts';
import ProductBigCard from '../internal/ProductBigCard';
import Breadcrumbs from '../common/Breadcrumbs';
import RESTapi from '../../RESTapi';
import { withRouter } from 'react-router-dom';
import '../../../css/style-product-card.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };

    this.pathName = '';
  }

  componentDidMount() {
    this.getProduct();
  };

  componentWillReceiveProps(nextProps) {
    let pathName = nextProps.location && nextProps.location.pathname;
    if(pathName === this.pathName) {return null}

    this.getProduct(pathName);
  }

  getProduct(pathName = this.props.location.pathname) {

    pathName && RESTapi.get(pathName)
      .then((data) => {
        data.data && this.setState({product: data.data});
        this.pathName = pathName;
      });
  }

  render() {
    return (
      <div>
        <Breadcrumbs/>
        <ProductBigCard product={this.state.product}/>
        <RecentlyViewed/>
        <SimilarProducts product={this.state.product}
        />
      </div>
    );
  }
}

export default withRouter(ProductDetail);

