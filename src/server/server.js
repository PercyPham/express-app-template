import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hi there!!!');
});

server.get('/smoke', (req, res) => {
  res.json({ message: 'OK' });
});

export default server;
