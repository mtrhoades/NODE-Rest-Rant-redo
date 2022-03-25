// IMPORTS/DEPENDENCIES
const router = require('express').Router()


// INDEX ROUTE ('/places') (GET, read route)
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/place1.jpeg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/place2.jpeg'
      }]
    // res.send('This is the index of places route - /places')
    res.render('places/index', { places } );
});


// SHOW PAGE



module.exports = router;