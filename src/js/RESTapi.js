const RESTapi = {

  HOST: 'https://neto-api.herokuapp.com/bosa-noga',

  getPathNames: {
    categories: '/categories/',
    products: '/products/',
    featured: '/featured/',
    filters: '/filters/',
    cart: '/cart/'
  },

  postPathNames: {
    cart: '/cart/',
    order: '/order/',
    subscribe: '/subscribe/'
  },

  getParams: {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  },

  get: (query = '', queryStringParams = '') => {
    if(!query && typeof query !== 'string') {return false;}

    query = RESTapi.getPathNames[query] ? RESTapi.getPathNames[query] : query;

    let endPoint = `${RESTapi.HOST}${query}`;
    endPoint += queryStringParams ? `?${queryStringParams}` : '';

    return fetch(endPoint, RESTapi.getParams)
      .then(result => result.json())
      .then(data => data)
      .catch((e) => {
        console.log(e);
      });
  }
};

export default RESTapi;
