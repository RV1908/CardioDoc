// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Health Parameters Route
app.post('/api/health-parameters', (req, res) => {
  // In a real application, you would save this to a database
  console.log('Received health parameters:', req.body);
  res.json({ success: true, message: 'Health parameters saved successfully' });
});

// Contact Form Route
app.post('/api/contact', (req, res) => {
  // In a real application, you would handle email sending here
  console.log('Received contact form:', req.body);
  res.json({ success: true, message: 'Message sent successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});