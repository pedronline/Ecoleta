import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('hello Pedro');
  res.json('Hello Pedro Morais');
});

app.listen(3333);
