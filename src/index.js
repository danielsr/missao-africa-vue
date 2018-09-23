import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
);

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
  server.use('*', cors({ origin: 'http://localhost:8080' }));
}

authRoutes(server);

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
  });
}

server.listen(process.env.PORT || 3000);
