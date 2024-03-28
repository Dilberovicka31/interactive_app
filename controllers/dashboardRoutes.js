//add a new post after the user is logged in
const { Post, User, Comment, Vote } = require("../models");
const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        include: [User],
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
    
        res.render("allPosts", {
       
        posts
        });
    } catch (err) {
        res.redirect("login");
    }
    });

router.get("/new", withAuth, (req, res) => {
    res.render("newPost");
    }
    
);


module.exports = router;