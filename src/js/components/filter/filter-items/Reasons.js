import React, { Component } from 'react';
const items = ["Офис", "Вечеринка", "Свадьба", "Спорт", "Путешествие", "Свидание", "Дома", "Произвести впечатление"]

class Reasons extends Component {
  render() {
    return (
      <ul>{items.map(item =>
        <li>
          <a href="#">{item}</a>
        </li>
      )}
      </ul>
    )
  }
}

export default Reasons;


