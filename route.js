const express = require("express");
const { register, getUsers } = require("./user");

const route = express.Router();
route.get('/register', (req, res) => {
    res.render('register'); 
  });

route.post('/register', register);
route.get('/users', getUsers);

module.exports = route;