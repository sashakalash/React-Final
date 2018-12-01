import React, {Component} from 'react';
const items = ["Балетки", "Босоножки и сандалии", "Ботильоны", "Ботинки", "Ботфорты", "Галоши", "Тапочки", "Туфли", "Сапоги"]

class CataloguePoints extends Component {
  render() {
    return (
      <ul>
        <ul>{items.map(item => <li><a href="#">{item}</a></li>)}</ul>
      </ul>
    )
  }
}

export default CataloguePoints;