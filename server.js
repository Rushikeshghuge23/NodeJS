const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const Person = require('./models/Person');
const bodyParser = require('body-parser');
const MenuItem = require('./models/MenuItem');
//import routers
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('welcome to my hotel')
});

//import the router files
app.use('/person', personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(PORT, () => {
  console.log('listening on port 3000');
})