import React, { Component } from 'react';
const items = ["Весна", "Лето"]

class Seasons extends Component {
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

export default Seasons;


