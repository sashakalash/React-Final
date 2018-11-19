import React, { Component } from 'react';
import Accordion from '../UI/Accordion';
import RangeFilter from './filter-items/RangeFilter';
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
          <ul>
            <li><a href="#">Балетки</a></li>
            <li><a href="#">Босоножки и сандалии</a></li>
            <li><a href="#">Ботильоны</a></li>
            <li><a href="#">Ботинки</a></li>
            <li><a href="#">Ботфорты</a></li>
            <li><a href="#">Галоши</a></li>
            <li><a href="#">Тапочки</a></li>
            <li><a href="#">Туфли</a></li>
            <li><a href="#">Сапоги</a></li>
          </ul>
        </Accordion>
        <div className="separator-150 separator-150-1"></div>
        <Accordion title="Цена">
          <RangeFilter onChange={this.onPriceChange} />
        </Accordion>
        <div className="separator-150 separator-150-2"></div>
        <Accordion title="Цвет">
          <ul>
            <li><a href="#">
              <div className="color beige"></div>
              <span className="color-name">Бежевый</span></a></li>
            <li><a href="#">
              <div className="color whitesnake"></div>
              <span className="color-name">Белый</span></a></li>
            <li><a href="#">
              <div className="color shocking-blue"></div>
              <span className="color-name">Голубой</span></a></li>
            <li><a href="#">
              <div className="color yellow"></div>
              <span className="color-name">Жёлтый</span></a></li>
            <li><a href="#">
              <div className="color king-crimson"></div>
              <span className="color-name">Алый</span></a></li>
            <li><a href="#">
              <div className="color deep-purple"></div>
              <span className="color-name">Фиолетовый</span></a></li>
            <li><a href="#">
              <div className="color black-sabbath"></div>
              <span className="color-name">Чёрный</span></a></li>
          </ul>
        </Accordion>
        <div className="separator-150 separator-150-3"></div>
        <Accordion title="Размер" customClass="sidebar__size">
          <ul>
            <div className="list-1">
              <li><label><input type="checkbox" className="checkbox" name="checkbox-31" /><span
                className="checkbox-custom"></span> <span
                  className="label">31</span></label></li>
              <li><label><input type="checkbox" className="checkbox" name="checkbox-33" /><span
                className="checkbox-custom"></span> <span
                  className="label">33</span></label></li>
              <li><label><input type="checkbox" className="checkbox" name="checkbox-35" /><span
                className="checkbox-custom"></span> <span
                  className="label">35</span></label></li>
              <li><label><input type="checkbox" className="checkbox" name="checkbox-37" /><span
                className="checkbox-custom"></span> <span
                  className="label">37</span></label></li>
              <li><label><input type="checkbox" className="checkbox" name="checkbox-39" /><span
                className="checkbox-custom"></span> <span
                  className="label">39</span></label></li>
            </div>
            <div className="list-2">
              <li><label><input type="checkbox" className="checkbox" name="checkbox-32" /><span
                className="checkbox-custom"></span> <span
                  className="label">32</span></label></li>
              <li><label><input type="checkbox" className="checkbox" name="checkbox-34" /><span
                className="checkbox-custom"></span> <span
                  className="label">34</span></label></li>
              <li><label><input type="checkbox" className="checkbox" name="checkbox-36"
                defaultChecked /><span className="checkbox-custom"></span> <span
                  className="label">36</span></label></li>
              <li><label><input type="checkbox" className="checkbox" name="checkbox-38" /><span
                className="checkbox-custom"></span> <span
                  className="label">38</span></label></li>
              <li><label><input type="checkbox" className="checkbox" name="checkbox-40" /><span
                className="checkbox-custom"></span> <span
                  className="label">40</span></label></li>
            </div>
          </ul>
        </Accordion>
        <div className="separator-150 separator-150-4"></div>
        <Accordion title="Размер каблука" customClass="sidebar__size">
        </Accordion>
        <div className="separator-150 separator-150-5"></div>
        <Accordion title="Повод">
          <ul>
            <li><a href="#">Офис</a></li>
            <li><a href="#">Вечеринка</a></li>
            <li><a href="#">Свадьба</a></li>
            <li><a href="#">Спорт</a></li>
            <li><a href="#">Путешествие</a></li>
            <li><a href="#">Свидание</a></li>
            <li><a href="#">Дома</a></li>
            <li><a href="#">Произвести впечатление</a></li>
          </ul>
        </Accordion>
        <div className="separator-150 separator-150-6"></div>
        <Accordion title="Сезон" isOpen={false}>
          <ul>
            <li><a href="#">Весна</a></li>
            <li><a href="#">Лето</a></li>
          </ul>
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
