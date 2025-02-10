const express = require('express');
const app = express();
const serverless = require('serverless-http');  // Nécessaire pour serverless

// Middleware et routes de ton application
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Autres routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test route working!' });
});

// Exporte l'application Express en utilisant serverless-http
module.exports.handler = serverless(app);
