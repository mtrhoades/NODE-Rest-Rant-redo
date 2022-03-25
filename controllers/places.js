// IMPORTS/DEPENDENCIES
const router = require('express').Router()


// INDEX ROUTE ('/places') (GET, read route)
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    // res.send('This is the index of places route - /places')
    res.render('places/index', { places } );
});


module.exports = router;