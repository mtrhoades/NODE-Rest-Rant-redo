// IMPORTS
const router = require('express').Router()
const db = require('../models')

// ROUTES:
// index
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places } )
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
  // res.send('GET /places stub')
});


// create
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
      console.log('Validation error message', message)
      res.render('places/new', { message })
      }
      else {
          res.render('error404')
      }
      })
});
// router.post('/', (req, res) => {
//   db.Place.create(req.body)
//   .then(() => {
//     res.redirect('/places')
//   })
//   .catch(err => {
//     console.log('err', err)
//     res.render('error404')
//   })
//   // res.send('POST /places stub')
// })


// new place input
router.get('/new', (req, res) => {
  res.render('places/new')
});


// edit
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
});

// edit place input
router.get('/:id/edit', (req, res) => {
  res.render('places/edit')
});

// show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});


// delete place
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// create comment
router.post("/:id/comment", (req, res) => {
  if (req.body.rant) {
    req.body.rant = true;
  } else {
    req.body.rant = false;
  }
  db.Place.findById(req.params.id)
    .then((place) => {
      console.log(db.Comment);
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});


// delete comment
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// EXPORTS
module.exports = router
// // IMPORTS/DEPENDENCIES
// const router = require('express').Router();
// const places = require('../models/places.js');


// // INDEX ROUTE ('/places') (GET, read route)
// router.get('/', (req, res) => {
//     // res.send('This is the index of places route - /places')
//     res.render('places/index', { places } );
// });


// // CREATE ROUTE
// router.post('/', (req, res) => {
//   console.log(req.body)
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// });


// // NEW PLACE INPUT ROUTE
// router.get('/new', (req, res) => {
//   res.render('places/new')
// });


// // Edit input page route
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id], index: req.params.id })
//   }
// });


// // EDIT ROUTE (update)
// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// });


// // SHOW PAGE
// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id } )
//   }
// });


// // DELETE Route
// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// });


// module.exports = router;