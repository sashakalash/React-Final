import React, { Component } from 'react';
const items = ["Бежевый", "Белый", "Голубой", "Жёлтый", "Алый", "Фиолетовый", "Чёрный"]

class CatalogueColors extends Component {
  render() {
    return (
      <ul>{items.map(item =>
        <li>
          <a href="#">
            <div className="color beige"></div>
            <span className="color-name">{item}</span>
          </a>
        </li>
      )}
      </ul>
    )
  }
}

export default CatalogueColors;


