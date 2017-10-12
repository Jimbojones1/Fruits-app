const express = require('express');
const router  = express.Router();
const fruits = require('../models/fruits')

router.get('/', (req, res) => {

  res.render('index', {
                        fruit: fruits
                      })
})

router.get('/new', (req, res ) => {
  res.render('new', {})
})

// To write a the show route for each individual fruit
router.get('/:index', (req, res) => {
  res.render('show', {fruit: fruits[req.params.index]})
})

router.get('/:index/edit', (req, res) => {
  res.render('edit', {
                      fruit: fruits[req.params.index],
                      index: req.params.index
                      })
});


router.get('/:name', (req, res) => {
  res.send(req.params.name)
});

router.post('/create', (req, res) => {
  console.log(req.body)

  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  fruits.push(req.body)

  res.redirect('/fruits')
})

router.put('/:index/edit', (req, res) => {
  console.log(req.body)
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  fruits[req.params.index] = req.body;

  res.redirect('/fruits')
})


router.delete('/:index', (req, res) => {
  console.log('hitting the deleter route')
  console.log(req.params.index)
  // model is removing the item out of the array in
  // models folder
  fruits.splice(req.params.index, 1);

  res.redirect('/fruits')
})



module.exports = router


// on your index page
// you are going to write a form to
// delete a fruit from the array


// in your controller you have to write
// a method to listen for delete requests

// you'll have to implement a module
// called method-override to allow
// your form to make delete request
// use npm to install modules
// google method-override

// maybe use it in a app.use()


















