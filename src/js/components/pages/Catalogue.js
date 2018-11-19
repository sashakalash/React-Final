import React, {Component} from 'react';
import ProductsList from '../internal/ProductsList';
import PagePagination from '../common/PagePagination';
import FilterSidebar from '../filter/FilterSidebar';
import RecentlyViewed from '../internal/RecentlyViewed';
import Breadcrumbs from '../common/Breadcrumbs';
import SortBy from '../internal/SortBy';

class Catalogue extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs/>
        <main className="product-catalogue">
          <FilterSidebar {...this.props}/>
          <section className="product-catalogue-content">
            <section className="product-catalogue__head">
              <div className="product-catalogue__section-title">
                <h2 className="section-name">Женская обувь</h2>
                <span className="amount"> {this.props.countText}</span>
              </div>
              <SortBy/>
            </section>

            <ProductsList
              onCountChange={this.props.onCountChange}/>

            <PagePagination/>
          </section>
        </main>
        <RecentlyViewed/>
      </div>
    );
  }
}

export default Catalogue;
