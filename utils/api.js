const axios = require('axios');
require("dotenv").config();


const api = {
  getUser(username) {
    const url = `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;
    
    return axios.get(url)
    console.log(`${username}`);
  },

  getUserImage(image) {
    const url = `https://api.github.com/users/${image}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;

    return axios.get(url)
    console.log(`${image}`);
  }
};

module.exports = api;
