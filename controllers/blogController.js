const Blog = require('../models/blogModel');

// Create a new blog
exports.createBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newBlog = new Blog({
      title,
      content,
      author: req.user.userId
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};
