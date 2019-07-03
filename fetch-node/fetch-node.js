'use strict';

const fetch = require('node-fetch');

const url = 'http://localhost:3000/api/v1/user';
const opt = { method: 'get' };

fetch(url, opt).then(res => {
  if(res.ok) {
    return res.json();
  }
  throw new Error('Network response was not ok.');
}).then(json => {
  console.log(json)
}).catch(err => {
  console.log('There has been a problem with your fetch operation: ', err.message);
});

