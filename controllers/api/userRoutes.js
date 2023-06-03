const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.body.username }
        });

        console.log(userData);

        // If no user is found, return error message
        if (!userData) {
            res.status(400).json({ message: 'Incorrect password or username' });
            return;
        };

        // Check the password! Return the result (true/false)
        const validPassword = await bcrypt.compare(req.body.password, userData.dataValues.password);

        console.log(validPassword);

        // If the password is not valid, return the same error message
        if (validPassword == false) {
            res.status(400).json({message: 'Incorrect password or username' });
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

router.post('/logout', async (req, res) => {
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(200).end();
            })
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;