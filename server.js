// DEPENDENCIES
const express = require('express'); // importing express framework
const methodOverride = require('method-override'); // enables adding PUT and DELETE to methods to override only using GET and POST


// CONFIGURATION
require('dotenv').config(); // importing  dotenv configuration
const PORT = process.env.PORT; // variable for the port # in .env file.
const app = express(); // variable for express required above.


// MIDDLEWARE (happens between req & res)
app.set('views', __dirname + '/views'); // grabs the views folder files.
app.use(express.static('public')); // access to public folder for css and images.
app.set('view engine', 'jsx'); // to be able to look at the views .jsx pages
app.engine('jsx', require('express-react-views').createEngine()); // importing 'express-react-views' to be able to use jsx
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// PLACES CONTROLLER ROUTE 
app.use('/places', require('./controllers/places'))


// ROUTES (initial stub route turned into home route)
app.get('/', (req, res) => {
    res.render('home')
});


// 404 ROUTE (error page)
app.get('*', (req, res) => {
    res.status(404).render('error404')
});


// LISTEN
app.listen(PORT, () => { // server listen 
  console.log('nomming at port', PORT);
});