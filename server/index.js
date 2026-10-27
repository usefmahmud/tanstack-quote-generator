// Express server for the TanStack Quote Generator
const express = require('express');
const cors = require('cors'); // Enable CORS for the client

const app = express();
app.use(cors()); // Allow requests from any origin (dev setup)

const PORT = process.env.PORT || 3001;

const quotes = [
  "Life is what happens when you're busy making other plans.",
  "The only way to do great work is to love what you do.",
  "In the middle of difficulty lies opportunity.",
  "Stay hungry, stay foolish.",
  "Simplicity is the soul of efficiency.",
];

app.get('/api/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
