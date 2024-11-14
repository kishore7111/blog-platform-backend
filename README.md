POST  http://localhost:5000/api/auth/register
{
  "username" : "rohit",
  "email" : "rohit.cs22@bitsathy.ac.in",
  "password" : "rohit123"
}



POST  http://localhost:5000/api/auth/login
{
  "username" : "rohit",
  "email" : "rohit.cs22@bitsathy.ac.in",
  "password" : "rohit123"
}


POST  http://localhost:5000/api/blogs
{
  "title" : "ML Basics",
  "content" : "Basics of ML and AI"
  
}


GET    http://localhost:5000/api/blogs
