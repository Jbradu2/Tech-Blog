// controllers/api-routes.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api-controller')

// API route for user signup
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up the session after successful signup
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.logged_in = true;

      res.status(201).json(newUser);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// API route for user login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData || !userData.checkPassword(req.body.password)) {
      res.status(400).json({ message: 'Incorrect email or password' });
      return;
    }

    // Set up the session after successful login
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'Login successful' });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// API route for user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;