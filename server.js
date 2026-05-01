const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the React build output
app.use(express.static(path.join(__dirname, 'build')));

// For any route not matched by static files, serve index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ApplyFlyAI server running on port ${PORT}`);
});
