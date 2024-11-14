const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Ensure Bearer <token> format
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded); // Debug the decoded token
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token validation error:', error); // Log error for debugging
    return res.status(401).json({ message: 'Token is not valid' });
  }
};
