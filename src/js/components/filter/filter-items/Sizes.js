import React, { Component } from 'react';
const sizes = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

class SizesItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" className="checkbox" name={"checkbox-" + this.props.item} />
          <span className="checkbox-custom"></span>
          <span className="label">{this.props.item}</span>
        </label>
      </li>
    )
  }
}

class Sizes extends Component {
  render() {
    const oddSizes = [], evenSizes = [];
    sizes.map(size => size % 2 === 0
      ? evenSizes.push(<SizesItem item={size} />)
      : oddSizes.push(<SizesItem item={size} />));
    return (
      <ul>
        <div className="list-1">{oddSizes}</div>
        <div className="list-1">{evenSizes}</div>
      </ul>
    )
  }
}

export default Sizes;
