const {User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        include: [User],
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
    
    //    console.log(posts);/
    
        res.render('homepage', { posts, loggedIn: req.session.logged_in});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    });

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
        include: [
            User,
            {
            model: Comment,
            include: [User],
            },
        ],
        });
    
        const post = postData.get({ plain: true });
    console.log(post)
        res.render('onePost', { post, loggedIn: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    }
);

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        console.log('logged in');
        res.redirect('/');
        return;
    }
    res.render('login');
    }  
                  
);

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        
        res.redirect('/');
        return;
    }
    res.render('signup');
    }
);
router.get('/forgot-password', (req,res) =>{
    res.render('forgotPassForm')
})


  

module.exports = router;