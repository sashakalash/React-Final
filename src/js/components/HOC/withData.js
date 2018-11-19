import React from 'react';

function withData(endpoint, propName) {
  return Component => class extends React.Component {
    constructor(props) {
      super(props);
      this.endpoint = endpoint;
      this.propName = propName;
      this.state = {};
    }

    componentDidMount() {
      this.fetchData(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.fetchData(nextProps);
    }

    fetchData(props) {
      let endpoint = this.endpoint;
      if (typeof endpoint === 'function') {
        endpoint = endpoint(props);
      }
      fetch(endpoint)
        .then(result => result.json())
        .then(data => this.setState({
          [this.propName]: data
        }));
    }

    render() {
      const props = {
        [propName]: this.state[propName]
      };
      console.log(props);
      return <Component {...this.props} {...props} />;
    }
  };
}

export default withData;
