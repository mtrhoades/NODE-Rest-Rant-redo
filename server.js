// DEPENDENCIES
const express = require('express'); // importing express framework


// CONFIGURATION
require('dotenv').config(); // importing  dotenv configuration
const PORT = process.env.PORT; // variable for the port # in .env file.
const app = express(); // variable for express required above.


// MIDDLEWARE (happens between req & res)
app.set('views', __dirname + '/views'); // grabs the views folder files.
app.use(express.static('public')); // access to public folder for css and images.
app.set('view engine', 'jsx'); // to be able to look at the views .jsx pages
app.engine('jsx', require('express-react-views').createEngine()); // importing 'express-react-views' to be able to use jsx


// PLACES CONTROLLER ROUTE 
app.use('/places', require('./controllers/places'))

// ROUTES (initial stub route turned into home route)
app.get('/', (req, res) => {
    res.render('home')
});


// 404 ROUTE (error page)
app.get('*', (req, res) => {
    res.status(404).send('<h1>error 404 please turn back!</h1>')
});


// LISTEN
app.listen(PORT, () => { // server listen 
  console.log('nomming at port', PORT);
});