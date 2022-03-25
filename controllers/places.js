// IMPORTS/DEPENDENCIES
const router = require('express').Router()


// INDEX ROUTE ('/places') (GET, read route)
router.get('/', (req, res) => {
    res.send('This is the index of places route - /places')
    // res.render('index', {
    //     places: "",
    //     title: 'Rest_Rant Index Page' 
    // })
});


module.exports = router;