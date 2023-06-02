const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.body.username }
        });

        // If no user is found, return error message
        if (!userData) {
            res.status(400).json('Incorrect password or username');
            return;
        };

        const validPassword = await userData.checkPassword(req.body.password);

        // If the password is not valid, return the same error message
        if (!validPassword) {
            res.status(400).json('Incorrect password or username');
            return;
        };

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({ user: userData, message: 'You are now logged in'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;