const axios = require('axios')

module.exports = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHTTPRequest'
  }
})