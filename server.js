// // server.js (ESM-compatible version)
// import express from 'express';
// import fetch from 'node-fetch';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const app = express();
// const PORT = 3001;
// const client_id = 'AXHkknI02RnaQ0vVJ3FK3pVcoToTlmFK';

// // These help get __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.get('/api/soundcloud', async (req, res) => {
//   const { path: scPath } = req.query;
//   const fullUrl = `https://api-v2.soundcloud.com/${scPath}?client_id=${client_id}`;

//   try {
//     const response = await fetch(fullUrl);
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to fetch from SoundCloud' });
//   }
// });

// app.use(express.static(path.join(__dirname, 'dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
