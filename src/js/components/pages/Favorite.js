import React, {Component} from 'react';
import ProductsList from '../internal/ProductsList';
import PagePagination from '../common/PagePagination';
import Breadcrumbs from '../common/Breadcrumbs';
import SortBy from '../internal/SortBy';

import '../../../css/style-catalogue.css';
import '../../../css/style-favorite.css';

class Favorite extends Component {
  render() {
    return (
      <div className="wrapper wrapper_favorite">
        <Breadcrumbs/>
        <main className="product-catalogue product-catalogue_favorite">
          <section className="product-catalogue__head product-catalogue__head_favorite">
            <div className="product-catalogue__section-title">
              <h2 className="section-name">В вашем избранном</h2>
              <span className="amount amount_favorite">{this.props.countText}</span>
            </div>
            <SortBy/>
          </section>

          <ProductsList
            onCountChange={this.props.onCountChange}
            params={this.props.filter}
          />

          <PagePagination/>
        </main>
      </div>
    );
  }
}

export default Favorite;

