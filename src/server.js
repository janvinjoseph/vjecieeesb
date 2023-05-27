const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Replace with your email service provider and credentials
    service: 'gmail',
    auth: {
      user: 'mail',
      pass: 'app password',
    },
  });

  // Set up the email data
  const mailOptions = {
    from: email,
    to: 'recipient mail', // Replace with the recipient email address
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully!');
    }
  });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
