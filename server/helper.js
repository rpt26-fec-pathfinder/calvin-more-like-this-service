const axios = require('axios');

const getData = async (page) => {

  const data = {
    title: null,
    price: null,
    releaseDate: null,
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

  await Promise.allSettled([getProductInfo(), getReviewInfo(), getPhotoInfo()])
    .then(results => {
      results.forEach(result => {
        // if promise is rejected fill will placeholder data
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
          // if promise resolves, set equal to team data
          if (result.reason.config.url.includes('4032')) {
            data.title = 'TBD';
            data.price = 'TBD';
            data.releaseDate = 'TBD';
          } else if (result.reason.config.url.includes('4052')) {
            data.reviewCount = 'TBD';
            data.reviewRating = 'TBD';
          } else if (result.reason.config.url.includes('4012')) {
            data.headerImage = 'TBD';
            data.gallery = 'TBD';

          }
        }
      });
    })
    .catch(err => console.log(err));
  return data;
};

module.exports = getData;