// DEPENDENCIES
const express = require('express'); // importing express framework


// CONFIGURATION
require('dotenv').config(); // importing  dotenv configuration
const PORT = process.env.PORT; // variable for the port # in .env file.
const app = express(); // variable for express required above.


// ROUTES
app.get('/', (req, res) => { // -' / '- home route
  res.send('Welcome to an Awesome App about Rest-Rants!')
});


// 404 ROUTE (error page)
app.get('*', (req, res) => {
    res.status(404).send('<h1>error 404 please turn back!</h1>')
});


// LISTEN
app.listen(PORT, () => { // server listen 
  console.log('nomming at port', PORT);
});