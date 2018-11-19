import React, {Component} from 'react';

class SortBy extends Component {
  render() {
    return (
      <div className="product-catalogue__sort-by">
        <p className="sort-by">Сортировать</p>
        <select id="sorting" name="">
          <option value="">по дате добавления</option>
          <option value="">по размеру</option>
          <option value="">по производителю</option>
        </select>
      </div>
    );
  }
}

export default SortBy;

