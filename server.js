'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0'

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node js!!');
})


app.listen(PORT, HOST);
console.log('Server is Running');