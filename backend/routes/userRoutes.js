const express = require('express');
const router = express.Router();

const User = require('../models/User');

// CREATE user
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({ name, email });

    await newUser.save(); // save to database

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
//test
