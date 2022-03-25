// IMPORTS/DEPENDENCIES
const router = require('express').Router();
const places = require('../models/places.js');

// INDEX ROUTE ('/places') (GET, read route)
router.get('/', (req, res) => {
    // res.send('This is the index of places route - /places')
    res.render('places/index', { places } );
});


// NEW PLACE ROUTE
router.get('/new', (req, res) => {
  res.render('places/new')
});


// CREATE ROUTE
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
});


// SHOW PAGE



module.exports = router;