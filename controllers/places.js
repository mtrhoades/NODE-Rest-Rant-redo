// IMPORTS/DEPENDENCIES
const router = require('express').Router();
const places = require('../models/places.js');


// INDEX ROUTE ('/places') (GET, read route)
router.get('/', (req, res) => {
    // res.send('This is the index of places route - /places')
    res.render('places/index', { places } );
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


// NEW PLACE INPUT ROUTE
router.get('/new', (req, res) => {
  res.render('places/new')
});


// SHOW PAGE
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id } )
  }
});


// DELETE Route
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
});


module.exports = router;