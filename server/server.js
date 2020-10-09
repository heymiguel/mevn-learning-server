require ('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('connected to DB yay'))

server.use(express.json());
server.use(cors());

const router = require("./characters");
server.use('/characters', router);

server.listen(3000, () => console.log("server started"))