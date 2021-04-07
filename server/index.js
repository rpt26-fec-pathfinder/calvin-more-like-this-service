const {app} = require('./server.js');
// const port = process.env.PORT || 4022;
const port = 4022;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});