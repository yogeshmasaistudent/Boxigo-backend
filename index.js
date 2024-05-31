const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3001;

// MiddleWare 
app.use(cors());



// GET Request 
app.get('/api/sample-data', async (req, res) => {
  try {
  
    const response = await axios.get(process.env.BOXIGO_API_URL);
   
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
