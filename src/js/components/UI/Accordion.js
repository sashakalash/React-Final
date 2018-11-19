import React, {Component} from 'react';

class Accordion  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <section className="sidebar__division">
        <div className={this.props.customClass}>
          <div className="sidebar__division-title">
            <h3>{this.props.title}</h3>
            <div className={`${this.state.isOpen ? 'opener-up' : 'opener-down'}`} onClick={this.toggleOpen}></div>
          </div>
          <div hidden={!this.state.isOpen}>
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

Accordion.defaultProps = {
  customClass: 'sidebar__color',
  isOpen: true
};

export default Accordion;

