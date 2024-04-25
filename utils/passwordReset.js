// passwordReset.js

const { User } = require('../models');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

// Function to generate a reset token
async function generateResetToken(userId) {
    try {
        const token = crypto.randomBytes(20).toString('hex');
        await User.update({ resetToken: token, resetTokenExpiry: Date.now() + 3600000 }, { where: { id: userId } });
        return token;
    } catch (error) {
        throw new Error('Error generating reset token');
    }
}

// Function to send a reset email
async function sendResetEmail(email, resetToken) {
    try {
        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Compose email message
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset Request',
            text: `Click this link to reset your password: ${process.env.APP_URL}/reset/${resetToken}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error)
        throw new Error('Error sending reset email');
    }
}

// Function to verify reset token
async function verifyResetToken(userId, token) {
    try {
        const user = await User.findOne({ where: { id: userId } });
        if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
            return false;
        }
        return true;
    } catch (error) {
        throw new Error('Error verifying reset token');
    }
}

// Function to update user password
async function updatePassword(userId, newPassword) {
    try {
        await User.update({ password: newPassword, resetToken: null, resetTokenExpiry: null }, { where: { id: userId } });
    } catch (error) {
        throw new Error('Error updating user password');
    }
}

module.exports = { generateResetToken, sendResetEmail, verifyResetToken, updatePassword };
