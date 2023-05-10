const express = require('express');
const router  = express.Router();
const { createSellListing } = require('../db/queries/sell');

router.get('/', (req, res) => {
  const templateVars = { user: req.session.user }

  res.render('sell-item', templateVars)
})

router.post('/item', (req, res) => {
  const sellItem = req.body;
  // const userEmail = req.session.user;
  createSellListing(sellItem)
    .then((result) => {
      res.redirect('/home');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error creating listing');
    });
});


module.exports = router;
