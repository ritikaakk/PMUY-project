const axios = require('axios');

axios.get('http://localhost:5000/api/users')
  .then(res => {
    console.log('Response from API:', res.data);
  })
  .catch(err => {
    if (err.response) {
      console.error('API Error:', err.response.status, err.response.data);
    } else if (err.request) {
      console.error('No response from server:', err.request);
    } else {
      console.error('Error setting up request:', err.message);
    }
  });
