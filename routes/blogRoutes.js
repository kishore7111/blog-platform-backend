const express = require('express');
const { createBlog, getAllBlogs } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createBlog);
router.get('/', getAllBlogs);

module.exports = router;
