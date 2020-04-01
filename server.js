const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Serve up static assets
app.use(express.static("/build"));

//Get request for my landing page
app.get('/', (req, res) => {
  res.json(JSON.parse(response.body));
})

//if running on a deployed site use the build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/build'));
}


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});