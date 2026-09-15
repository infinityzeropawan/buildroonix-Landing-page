/**
 * BUILDROONIX — Production Express Backend Server & Content DB API
 * Target domain: buildroonix.com
 * Handles: Live content API, Admin Auth, Atomic File DB storage, Static file serving
 */

const express = require('express');
const cors    = require('cors');
const fs      = require('fs');
const path    = require('path');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 8080;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'buildroonix2026';
const AUTH_TOKEN     = process.env.AUTH_TOKEN || 'bx_admin_token_2026_secured';

const DATA_DIR  = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'content.json');

// Ensure database directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Healthcheck endpoint (used by PM2 / uptime checkers)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Buildroonix Production API',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// GET /api/content — Public live content retrieval
app.get('/api/content', (req, res) => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const data = JSON.parse(raw);
      return res.json({ success: true, source: 'database', content: data });
    }
    return res.json({ success: true, source: 'defaults', content: null });
  } catch (err) {
    console.error('Error reading content DB:', err);
    return res.status(500).json({ success: false, message: 'Database read error' });
  }
});

// POST /api/login — Admin authentication
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({
      success: true,
      token: AUTH_TOKEN,
      message: 'Authentication successful'
    });
  }
  return res.status(401).json({
    success: false,
    message: 'Incorrect admin password'
  });
});

// POST /api/content — Save content updates to DB (Admin authorized)
app.post('/api/content', (req, res) => {
  const token = req.headers['x-admin-token'] || req.body.token;
  if (token !== AUTH_TOKEN) {
    return res.status(403).json({ success: false, message: 'Unauthorized action' });
  }

  const { content } = req.body;
  if (!content || typeof content !== 'object') {
    return res.status(400).json({ success: false, message: 'Invalid content format' });
  }

  try {
    const tempFile = `${DATA_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(content, null, 2), 'utf8');
    fs.renameSync(tempFile, DATA_FILE); // Atomic write
    return res.json({ success: true, message: 'Content saved to database successfully' });
  } catch (err) {
    console.error('Error writing content DB:', err);
    return res.status(500).json({ success: false, message: 'Failed to write to database' });
  }
});

// Serve Static Front-End Files
app.use(express.static(__dirname));

// Friendly Route for Admin Portal (/admin -> admin.html)
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Catch-all for main SPA route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware to prevent server crash
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 Buildroonix Production Server running on port ${PORT}`);
  console.log(`📍 Live URL: http://localhost:${PORT}`);
  console.log(`🔐 Admin URL: http://localhost:${PORT}/admin`);
  console.log(`=================================================`);
});
