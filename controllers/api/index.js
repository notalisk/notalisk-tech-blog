// required express to router.
const router = require('express').Router();

// calling user routes to api
const userRoutes  = require('./userRoutes');

const blogRoutes = require('./blogRoutes');

router.use('/users', userRoutes);

router.use('/blogs', blogRoutes);

// exporting router
module.exports = router;