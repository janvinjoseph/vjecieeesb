const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // Choose the port number you want to use

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define a route to handle the form submission
app.post('/send-email', (req, res) => {
  // Extract form data from the request body
  const { name, email, text } = req.body;

  // Create a transporter with your email transport options
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secureConnection: false, // Set to true if using a secure connection (TLS/STARTTLS)
    auth: {
      user: 'aman@outlook.com', // Replace with your Outlook email address
      pass: 'oksghjk', // Replace with your Outlook password or app-specific password
    },
    tls: {
      ciphers: 'SSLv3', // Option 1: Use SSLv3 cipher (if required by your Outlook account)
      rejectUnauthorized: false, // Option 2: Disable certificate verification
    },
  });

  // Define the email options
  const mailOptions = {
    from: email, // Replace with your email address
    to: 'janvinjoseph@outlook.com', // Replace with the recipient's email address
    subject: '',
    text: `
      Name: ${name}
      Email: ${email}
      Comment: ${text}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
