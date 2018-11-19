import React, { Component } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Favorite from './components/pages/Favorite';
import MainPage from './components/pages/MainPage';
import Catalogue from './components/pages/Catalogue';
import ProductDetail from './components/pages/ProductDetail';
import Order from './components/pages/Order';
import RESTapi from './RESTapi';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import qs from 'qs';
import getNoun from "./components/common/getNoun";
const { parse } = qs;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      count: 0,
      countText: 'товаров',
      filter: {}
    };

    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.onCountChange = this.onCountChange.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    RESTapi.get('categories')
      .then((data) => {
        data && data.data && this.setState({ categories: data.data });
      });
  }

  onChangeFilter(newParams = {}) {
    if (typeof newParams === 'string') {
      newParams = parse(newParams);
    }
  }

  onCountChange(count = 0) {
    if (count !== this.state.count) {
      this.setState({
        count,
        countText: getNoun(count, ['товар', 'товара', 'товаров'])
      });
    }
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Header
            categories={this.state.categories}
            onChangeFilter={this.onChangeFilter}
          />
          <Switch>
            <Route path='/products/:id' component={ProductDetail} />
            <Route path='/products/' component={() =>
              <Catalogue
                onCountChange={this.onCountChange}
                countText={this.state.countText}
                onChangeFilter={this.onChangeFilter}
              />}
            />
            <Route path='/favorite/' component={() =>
              <Favorite
                onCountChange={this.onCountChange}
                countText={this.state.countText} />}
            />
            <Route path='/order/' component={Order} />
            <Route exact path='/' component={() => <MainPage categories={this.state.categories} />} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
