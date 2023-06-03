const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    const blogData = await Blog.findAll({
        include: [
            {
                model: User
            },
            {
                model: Comment
            }
        ]
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('home', {
        blogs,
        logged_in: req.session.logged_in,
    });
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard', {
        logged_in: req.session.logged_in,
    });
});

module.exports = router;