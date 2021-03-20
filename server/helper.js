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
      // console.log('this is results', results);
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
          if (result.value.config.url.includes('4032')) {

            data.title = result.value.data.name;
            data.price = result.value.data.price;
            data.releaseDate = result.value.data.releaseDate;

          } else if (result.value.config.url.includes('4052')) {

            data.reviewCount = result.value.data.length;
            let recommended = 0;
            for (let i = 0; i < data.reviewCount; i++) {
              if (result.value.data[i].recommended === 1) {
                recommended++;
              }
            }
            let percentRecommended = recommended / data.reviewCount;
            if (percentRecommended >= .80) {
              data.reviewRating = 'Very Positive';
            } else if (percentRecommended >= .70) {
              data.reviewRating = 'Mostly Positive';
            } else if (percentRecommended >= .40) {
              data.reviewRating = 'Mixed';
            } else if (percentRecommended >= .20) {
              data.reviewRating = 'Mostly Negative';
            } else {
              data.reviewRating = 'Very Negative';
            }

          } else if (result.value.config.url.includes('4012')) {

            data.headerImage = result.value.data[0].headerImage;
            let gallery = result.value.data[0].mainImages.map(image => {
              return image.main;
            });
            data.gallery = gallery;

          }
        }
      });
    })
    .catch(err => console.log('Error reaching to team\'s endpoints', err));

  return data;
};

module.exports = getData;