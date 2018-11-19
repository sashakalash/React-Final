import React, {Component} from 'react';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="site-path">
        <ul className="site-path__items">
          <li className="site-path__item"><a href="index.html">Главная</a></li>
          <li className="site-path__item"><a href="">Текущая</a></li>
        </ul>
      </div>
    );
  }
}

export default Breadcrumbs;

