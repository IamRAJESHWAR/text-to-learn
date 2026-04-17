// Example of a protected route using Auth0 middleware
const express = require('express');
const router = express.Router();
const checkJwt = require('../middlewares/auth');

// Protected route example
router.get('/protected', checkJwt, (req, res) => {
  res.json({ message: 'You have accessed a protected route!', user: req.auth });
});

module.exports = router;
