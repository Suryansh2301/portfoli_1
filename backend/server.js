const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

const FILES_DIR = path.join(__dirname, 'files');

app.get('/api/resume/pdf', (req, res) => {
    res.download(
        path.join(FILES_DIR, 'Suryansh_Kumar_Pathak_Resume.pdf'),
        'Suryansh_Kumar_Pathak_Resume.pdf',
        (err) => {
            if (err && !res.headersSent) {
                res.status(404).json({
                    error: 'Resume PDF not found on server.'
                });
            }
        }
    );
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Portfolio backend running on port ${PORT}`);
});