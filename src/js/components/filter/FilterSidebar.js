import React, { Component } from 'react';
import Accordion from '../UI/Accordion';
import RangeFilter from './filter-items/RangeFilter';
import CataloguePoints from './filter-items/CataloguePoints';
import CatalogueColors from './filter-items/CatalogueColors';
import Sizes from './filter-items/Sizes';
import Reasons from './filter-items/Reasons';
import Seasons from './filter-items/Seasons';
import RESTapi from '../../RESTapi';

class FilterSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFilters: {}
    };

    this.onPriceChange = this.onPriceChange.bind(this);
  }

  componentDidMount() {
    this.getAllFilters();
  }

  getAllFilters() {
    RESTapi.get('filters')
      .then((data) => {
        data.data && this.setState({ allFilters: data.data });
      });
  }

  onPriceChange({ min, max }) {
    this.props.onChangeFilter && this.props.onChangeFilter({
      minPrice: min,
      maxPrice: max
    });
  }

  render() {
    return (
      <section className="sidebar">
        <Accordion title="Каталог">
          <CataloguePoints />
        </Accordion>
        <div className="separator-150 separator-150-1"></div>
        <Accordion title="Цена">
          <RangeFilter onChange={this.onPriceChange} />
        </Accordion>
        <div className="separator-150 separator-150-2"></div>
        <Accordion title="Цвет">
          <CatalogueColors />
        </Accordion>
        <div className="separator-150 separator-150-3"></div>
        <Accordion title="Размер" customClass="sidebar__size">
          <Sizes />
        </Accordion>
        <div className="separator-150 separator-150-4"></div>
        <Accordion title="Размер каблука" customClass="sidebar__size">
        </Accordion>
        <div className="separator-150 separator-150-5"></div>
        <Accordion title="Повод">
          <Reasons />
        </Accordion>
        <div className="separator-150 separator-150-6"></div>
        <Accordion title="Сезон" isOpen={false}>
          <Seasons />
        </Accordion>
        <div className="separator-150 separator-150-7"></div>
        <Accordion title="Сезон">
          <form action="post" className="brand-search">
            <input type="search" className="brand-search" id="brand-search"
              placeholder="Поиск" />
            <input type="submit" name="" defaultValue="" className="submit" />
          </form>
        </Accordion>
        <label><input type="checkbox" className="checkbox" name="checkbox-disc" /><span
          className="checkbox-discount"></span> <span className="text-discount">Со скидкой</span></label>

        <div className="separator-240"></div>

        <section className="sidebar__division">
          <div className="drop-down">
            <a href="#"><span className="drop-down-icon"></span>Сбросить</a>
          </div>
        </section>
      </section>
    );
  }
}

export default FilterSidebar;
