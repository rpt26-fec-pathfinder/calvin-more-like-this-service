const axios = require('axios');

const getData = (page) => {

  const data = {
    title: null,
    price: null,
    releaseDate: null,
    tags: null,
    reviewCount: null,
    reviewRating: null,
    headerImage: null,
    gallery: null
  };

  let promises = [];

  // GET request to James' product endpoint
  const getProductInfo = () => {
    return axios.get(`localhost:4032/api/product/${page}`);
  };
  // GET request to Tim's review endpoint
  const getReviewInfo = () => {
    return axios.get(`localhost:4052/${page}`);
  };
  // GET request to Anthony's photo endpoint
  const getPhotoInfo = () => {
    return axios.get(`localhost:4012/images/${page}`);
  };

  Promise.allSettled([getProductInfo(), getReviewInfo(), getPhotoInfo()])
    .then(results => {
      results.forEach(result => {
        if (result.status === 'rejected') {
          if (result.reason.config.url.includes('4032')) {
            data.title = `Game ${page} Title`;
            data.price = `Game ${page} Price`;
            data.releaseDate = `Game ${page} Release Date`;
          } else if (result.reason.config.url.includes('4052')) {
            data.reviewCount = `Game ${page} Total Reviews`;
            data.reviewRating = `Game ${page} Review Summary`;
          } else if (result.reason.config.url.includes('4012')) {
            data.headerImage = `Game ${page} Header Image`;
            data.gallery = `Game ${page} Gallery`;
          } else {
            console.log('Error with axios GET requests in Promise.allSettled');
          }
        } else {
          console.log('All promises resolved successfully');
          // set data object to values from successful GET requests
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = getData;