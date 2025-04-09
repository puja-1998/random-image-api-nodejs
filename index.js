const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// GET /api/image/random?width=300&height=300
app.get('/', async (req, res) => {
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
