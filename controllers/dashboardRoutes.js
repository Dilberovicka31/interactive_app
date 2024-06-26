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
        console.log(err);
        res.redirect("login");
    }
    });

router.get("/new", withAuth, (req, res,err) => {
    console.log(err)
    res.render("newPost");
    }
    
);

router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        res.render("editPost", {
        post,
        });
    } catch (err) {
        res.redirect("login");
    }
    }
);



module.exports = router;