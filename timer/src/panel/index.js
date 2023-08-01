

  const express = require('express');
  const axios = require('axios');
  

  const user_key = 'ZETlSF3KnP0XeI8'; // Replace with actual user key value
  const UUID = 'd68cd229-4838-3af0-88db-121c020403f2'; // Replace with actual UUID value
  
  const app = express();
  const port = 1000;
  
  app.post('/', async (req, res) => {
    const BHATIA = "https://vipkey.pakijobsportal.com/connect";
  
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // Add other headers if needed
      },
    };
  

  
    // const requestData = game=PUBG&user_key=${encodeURIComponent(user_key)}&serial=${encodeURIComponent(UUID)};
    const requestData = `game=PUBG&user_key=${user_key}&serial=${UUID}`;
    try {
      const response = await axios.post(BHATIA, requestData, options);
      console.log(response.data)
      const result = response.data;
      console.log(Date.now(),'hi im saleem' )
      console.log(result.success)
      if (result.status) {
        const token = result.data.token;
        const rng = result.data.rng;

        if (rng + 30 > Math.floor(Date.now() / 1000)) {
          // Valid response
        
          res.send('OK');
        } else {
          const errMsg = result.reason;
          res.status(400).send(errMsg);
        }
      } else {
        const errMsg = result.reason;
        res.status(400).send(errMsg);
      }
    } catch (error) {
      const errMsg = '{' + error.message + '}\n{' + error.response.data + '}';
      res.status(500).send(errMsg);
    }
  });
  
  app.listen(port, () => {
    console.log('5000');
  });