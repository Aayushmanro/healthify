const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const profileController = require('../controllers/profileController');

// @route   GET api/profile
// @desc    Get current user's profile
// @access  Private
router.get('/', auth, profileController.getProfile);

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private
router.post('/', auth, profileController.updateProfile);

module.exports = router;
