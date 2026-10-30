
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Project directories
const FRONTEND_DIR = path.join(__dirname, '..', 'frontend');
const FILES_DIR = path.join(__dirname, 'files');

// Resume PDF path
const resumePath = path.join(
    FILES_DIR,
    'Suryansh_Kumar_Pathak.pdf'
);

// Debug information
console.log('Looking for resume:', resumePath);
console.log('Resume exists:', fs.existsSync(resumePath));

if (fs.existsSync(FILES_DIR)) {
    console.log('Files folder:', fs.readdirSync(FILES_DIR));
} else {
    console.log('Files folder does not exist!');
}

// Serve frontend static files
app.use(express.static(FRONTEND_DIR));

// Resume download API
app.get('/api/resume/pdf', (req, res) => {

    if (!fs.existsSync(resumePath)) {
        console.error('Resume PDF not found:', resumePath);

        return res.status(404).json({
            success: false,
            error: 'Resume PDF not found on server.'
        });
    }

    res.download(
        resumePath,
        'Suryansh_Kumar_Pathak.pdf',
        (err) => {
            if (err) {
                console.error('Download error:', err);
            } else {
                console.log('Resume downloaded successfully.');
            }
        }
    );
});

// Health check API
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Portfolio backend is running'
    });
});

// Handle unknown API routes
app.use('/api', (req, res) => {
    res.status(404).json({
        error: 'API route not found'
    });
});

// Frontend fallback
app.use((req, res) => {
    res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Portfolio server running at http://localhost:${PORT}`);
});

module.exports = app;
