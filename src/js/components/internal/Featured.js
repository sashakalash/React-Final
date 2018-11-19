import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RESTapi from '../../RESTapi';
import FeaturedSlider from '../internal/FeaturedSlider';

let activeItemClass = 'new-deals__menu-item_active';
let filterAll = 'all';

class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: filterAll,
      featuredList: [],
      filteredList: []
    };
  }

  componentWillMount() {
    this.props.categories.unshift({id: filterAll, title: 'Все'});
  }

  componentWillUnmount() {
    this.props.categories.shift();
  }

  componentDidMount() {
    this.getFeaturedList();
  }

  getFeaturedList() {
    RESTapi.get('featured')
      .then((data) => {
        data && data.data && this.setState({
          featuredList: data.data,
          filteredList: data.data
        });
      })
  }

  onSelectFilter(event, filter) {
    event && event.preventDefault();

    let filteredList;

    if (filter !== filterAll) {
      filteredList = this.state.featuredList.filter(item => item && item.categoryId === filter);
    } else {
      filteredList = this.state.featuredList;
    }

    this.setState({filter, filteredList});
  }


  render() {
    let {categories} = this.props;

    return (
      <section className="new-deals wave-bottom">
        <h2 className="h2">Новинки</h2>
        <div className="new-deals__menu">
          <ul className="new-deals__menu-items">
            {categories && categories.map((item) => {
              const activeClassName = item.id === this.state.filter ? activeItemClass : '';

              return (
                <li key={item.id} className={`new-deals__menu-item ${activeClassName}`}>
                  <a href="#" onClick={(e) => this.onSelectFilter(e, item.id)}>{item.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <FeaturedSlider list={this.state.filteredList}/>
      </section>
    );
  }
}

Featured.defaultProps = {
  categories: []
};

Featured.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Featured;

