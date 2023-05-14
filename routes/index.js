const express = require('express');
const router = express.Router();



const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'ViewCrowd', messages });
});

//get new form
router.get('/new', (req, res, next) => {

  res.render('form', { title: 'Add View'})
})

router.post('/new', (req, res, next) => {
  const body = req.body

  messages.unshift({text: body.message, user: body.name, added: new Date()})  
  res.redirect('/')
})
module.exports = router;
