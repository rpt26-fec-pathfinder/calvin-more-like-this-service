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

  // GET request to James' product endpoint
  const getProductInfo = () => {
    return axios.get(`http://localhost:4032/api/product/${page}`);
  };
  // GET request to Tim's review endpoint
  const getReviewInfo = () => {
    return axios.get(`http://localhost:4052/reviews/${page}`);
  };
  // GET request to Anthony's photo endpoint
  const getPhotoInfo = () => {
    return axios.get(`http://localhost:4012/images/${page}`);
  };

  await Promise.allSettled([getProductInfo(), getReviewInfo(), getPhotoInfo()])
    .then(results => {
      results.forEach(result => {
        // if promise is rejected fill will placeholder data
        if (result.status === 'rejected') {
          if (result.reason.config.url.includes('4032')) {
            data.title = `Game ID ${page} Title`;
            data.price = `Game ID ${page} Price`;
            data.releaseDate = `Game ID ${page} Release Date`;
          } else if (result.reason.config.url.includes('4052')) {
            data.reviewCount = `Game ID ${page} Review Count`;
            data.reviewRating = `Game ID ${page} Review Summary`;
          } else if (result.reason.config.url.includes('4012')) {
            data.headerImage = `Game ID ${page} Header Image`;
            data.gallery = `Game ID ${page} Gallery`;
          } else {
            console.log('Error in Promise.allSettled');
          }
        } else {
          // if promise resolves, set equal to team data
          if (result.reason.config.url.includes('4032')) {
            data.title = result.name;
            data.price = result.price;
            data.releaseDate = result.releaseDate;
          } else if (result.reason.config.url.includes('4052')) {
            data.reviewCount = result.length;
            // will need to calculate the number of recommended (1)
            // divide by the total number of reviews
            // generate a string based on the percentage
            data.reviewRating = 'TBD';
          } else if (result.reason.config.url.includes('4012')) {
            data.headerImage = result.headerImage;
            data.gallery = result.moreLikeThisImages;

          }
        }
      });
    })
    .catch(err => console.log('Error reaching to team\'s endpoints', err));

  return data;
};

module.exports = getData;