const fs = require('fs');
const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Index' });
});
app.listen(3000, function() {
  console.log('PS Project Running on port 3000!');
});
