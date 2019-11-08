// Requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Connection with mongo atlas db
// mongoose.connect(`mongodb+srv://${process.env.DEV_DB_USER}:${process.env.DEV_DB_PASSWORD}@cluster0-yovn6.mongodb.net/wassi?retryWrites=true&w=majority`, { useNewUrlParser: true })
mongoose.connect(`mongodb://localhost:27017/wassi`, { useNewUrlParser: true })
.then(() => {
  console.log('Connected to the database');
})
.catch(() => {
  console.log('Connection failed!');
});

// app configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.options('*', cors());
app.use(cors());

module.exports = app;
