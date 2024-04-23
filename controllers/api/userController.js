const {User} = require('../../models');
const router = require('express').Router();
const transporter = require('../../config/nodemailer'); 



//CREATE USER
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
    });

//LOGIN
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    
        if (!userData) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
    
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
    });


    //adding route just to test getting all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
    }
    );

//LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
    });

    router.post('forgot-password', async (req, res) => {
       const {email} = req.body;

       try {
        const user = await User.findOne({where: {email}});
        if (!user) {
            return res.status(400).json({message: 'No user with that email address'});
        }
        const resetToken = user.getResetToken();
        await user.save();

        const resetUrl = `http://localhost:3000/reset/${resetToken}`;
        const message = {
            to: email,
            subject: 'Password Reset Request',
            text: `Click this link to reset your password: ${resetUrl}`
        };
        await transporter.sendMail(message);
        res.status(200).json({message: 'Email sent'});

       }
       catch (err) {
          console.error(err);
          res.status(500).json({message: 'Failed to send reset email'});
       }
    }
    );



module.exports = router;