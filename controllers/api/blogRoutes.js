const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');

// Finds the comments of a blog post, by blog post id.
router.get('/comments/:id', async (req, res) => {
    try {
        // find comments where the blog_id matches the id param
        const commentData = await Comment.findAll({
            where: {
                blog_id: req.params.id,
            }
        });

        const comments = commentData.map((comment) => comment.get({ plain: true }))

        console.log(comments);

        res.status(200).json(comments);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;