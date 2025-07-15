const express = require('express');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/jwt', (req, res) => {
  const appId = process.env.GITHUB_APP_ID;
  const privateKey = process.env.GITHUB_PRIVATE_KEY;

  const now = Math.floor(Date.now() / 1000);

  const payload = {
    iat: now - 60,
    exp: now + 600, // 10 minutes
    iss: appId,
  };

  try {
    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
    res.json({
      token,
      expires_at: new Date((now + 600) * 1000).toISOString(),
    });
  } catch (err) {
    console.error('JWT generation failed:', err);
    res.status(500).json({ error: 'Failed to sign JWT' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ GitHub JWT API running at http://localhost:${PORT}/jwt`);
});