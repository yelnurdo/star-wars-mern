const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route    POST api/favorites
// @desc     Add favorite item
// @access   Private
router.post('/', auth, async (req, res) => {
  const { itemId } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (user.favorites.includes(itemId)) {
      return res.status(400).json({ msg: 'Item already in favorites' });
    }
    user.favorites.push(itemId);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    DELETE api/favorites/:itemId
// @desc     Remove favorite item
// @access   Private
router.delete('/:itemId', auth, async (req, res) => {
  const { itemId } = req.params;

  try {
    const user = await User.findById(req.user.id);
    user.favorites = user.favorites.filter(id => id !== itemId);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
