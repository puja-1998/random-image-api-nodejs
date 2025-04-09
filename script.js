const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h2>🎲 Random Image API</h2>
    <p>Use <code>/api/image/random</code> to get a random image.</p>
    <p>You can also pass query parameters like <code>?width=300&height=300</code></p>
  `);
});

app.get('/api/image/random', async (req, res) => {
  try {
    const width = req.query.width || 400;
    const height = req.query.height || 400;
    const imageUrl = `https://picsum.photos/${width}/${height}`;
    res.redirect(imageUrl);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
