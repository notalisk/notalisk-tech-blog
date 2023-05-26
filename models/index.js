const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Users have many Blogs
// Blogs have one User

// Users have many Comments
// Comments have one User

// Blogs have many Comments
// Comments have one Blog

module.exports = { User, Blog, Comment };