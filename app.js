const express = require('express');
const app = express();
const port = 3020;

//routers
const debtRouter = require('./routes/images');

app.get('/', (req, res) => {
  res.send('Microservice C');
});

app.use('/api/v1/images', debtRouter);

app.listen(port, () => {
  console.log('Microservice A listening on port 3020...');
});
