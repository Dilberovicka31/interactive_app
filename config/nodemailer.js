const emailjs = require('emailjs');

// Create a new SMTP client with your SMTP server settings
const smtpClient = emailjs.SMTPClient({
  user: process.env.EMAIL_USER, // Your email address
  password: process.env.EMAIL_PASS, // Your email password or app-specific password
  host: 'smtp.gmail.com', // Your SMTP server hostname
  ssl: true, // Set to true if your SMTP server requires SSL
});

// Create an email message
const message = {
  from: 'Your Name <engagehub@gmail.com>', // Sender's name and email address
  to: '', // Recipient's email address
  subject: 'Test Email', // Email subject
  text: 'This is a test email sent using emailjs.', // Email body (plain text)
  attachment: [
    { data: '<html>This is a test email sent using emailjs.</html>', alternative: true }, // Email body (HTML)
  ],
};

// Send the email
smtpClient.send(message, (err, message) => {
  if (err) {
    console.error('Error sending email:', err);
  } else {
    console.log('Email sent successfully:', message);
  }
});
