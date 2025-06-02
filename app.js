const express = require('express');
const app = express();
const port = 3020;
const cors = require('cors');

app.use(cors());

//routers
const petsRouter = require('./routes/pets');

app.get('/', (req, res) => {
  res.send('Microservice C: Pet Information Provider');
});

app.use('/api/v1/pets', petsRouter);

app.listen(port, () => {
  console.log('Microservice C(Pet Information) listening on port 3020...');
});
