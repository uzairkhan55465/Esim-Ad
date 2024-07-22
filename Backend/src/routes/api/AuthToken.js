var router = require('express').Router();
var AuthToken = require('../../controller/AuthToken')
var verifyToken = require('../../middlewares/auth')
const axios = require('axios');

router.get('/check-token', verifyToken, AuthToken.checkToken);
router.get('/auth', async (req, res) => {
    try {
      // Data to send to the third-party API
      const requestData = {
        "partner_login": "wowglobal.admin",
        "api_key": "fp8hk4dnsa7d",
        "context": "admin"
      };
  
      // Axios request configuration
      const options = {
        method: 'GET',
        url: 'https://api.bnesim.com/v0.1/auth_request/',
        headers: {
          'accept': 'application/json'
        },
        params: requestData  // Send data as query parameters
      };
  
      // Make request to third-party API
      const response = await axios.request(options);
  console.log("abc=====", response) 
      // Send the response from third-party API to the client
      res.json(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      res.status(error.response ? error.response.status : 500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = router; 