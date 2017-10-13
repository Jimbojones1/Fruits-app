const express = require('express');
const router  = express.Router();
const fruit = require('../models/fruits')

router.get('/', (req, res) => {

  fruit.find((err, fruits)=> {

    if(err) {
      res.send('there was error with the database')
    } else {
       res.render('index', {
                      fruit: fruits
                    })
    } // end of if else
  }) // end of mongo query
}) // end of route

router.get('/new', (req, res ) => {
  res.render('new', {})
})

// To write a the show route for each individual fruit
router.get('/:index', (req, res) => {
  console.log('hitting')
  fruit.findById(req.params.index, (err, fruit)=> {
    res.render('show', {fruit: fruit})
  })


})

router.get('/:index/edit', (req, res) => {

  fruit.findById(req.params.index, (err, fruit) => {
    if(err) {
      res.send('error updating')
    } else {
       res.render('edit', {
                      fruit: fruit
                      })
    }
  })// end of model query
});




router.post('/create', (req, res) => {
  console.log(req.body)

  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  // fruits.push(req.body)
  fruit.create(req.body, (err, fruit) => {
    if(err){
      res.send('there was an error create the fruit')
    } else {
      console.log(fruit);
      res.redirect('/fruits')
    }
  })


})

router.put('/:index/edit', (req, res) => {
  console.log(req.body)
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  fruit.findByIdAndUpdate(req.params.index, req.body, (err, fruit) => {
    if(err) {
      res.send('there was an error updating')
    } else {
      res.redirect('/fruits')
    }
  })



})


router.delete('/:index', (req, res) => {
  console.log('hitting the deleter route')
  console.log(req.params.index)
  // model is removing the item out of the array in
  // models folder


  fruit.findByIdAndRemove(req.params.index, (err, fruit) => {
    if(err) {
      res.send('error deleting')
    } else {
      res.redirect('/fruits')
    }
  })


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


















