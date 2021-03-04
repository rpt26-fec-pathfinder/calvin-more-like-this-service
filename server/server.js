const express = require('express');
const app = express();
const port = 4022;

app.use(express.static('./public/dist'));

app.get((req, res) => {
  res.status(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});