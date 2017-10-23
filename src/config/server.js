import express from 'express';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3003;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
