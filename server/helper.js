const axios = require('axios');

let title;
let price;
let releaseDate;
let tags;
let reviewCount;
let reviewRating;
let headerImage;
let gallery;

let promises = [];

// GET request to James' product endpoint
const getProductInfo = () => {
  return axios.get(`localhost:4032/api/product/${i}`);
};
// GET request to Tim's review endpoint
const getReviewInfo = () => {
  return axios.get(`localhost:4052/${i}`);
};
// GET request to Anthony's photo endpoint
const getPhotoInfo = () => {
  return axios.get(`localhost:4012/images/${i}`);
};

Promise.allSettled([getProductInfo(), getReviewInfo(), getPhotoInfo()])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'rejected') {
        if (result.reason.config.url.includes('4032')) {
          title = `Game ${i} Title`;
          price = `Game ${i} Price`;
          releaseDate = `Game ${i} Release Date`;
        } else if (result.reason.config.url.includes('4052')) {
          reviewCount = `Game ${i} Total Reviews`;
          reviewRating = `Game ${i} Review Summary`;
        } else if (result.reason.config.url.includes('4012')) {
          headerImage = `Game ${i} Header Image`;
          gallery = `Game ${i} Gallery`;
        } else {
          console.log('Error with axios GET requests in Promise.allSettled');
        }
      } else {
        console.log('All promises resolved successfully');
      }
    });
  })
  .catch(err => {
    console.log(err);
  });