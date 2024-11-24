const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Für statische Dateien

// Route zum Ausführen der Batch-Datei
app.get('/run-python', (req, res) => {
    const batFilePath = path.join(__dirname, 'run-model.bat'); // Pfad zur Batch-Datei
    exec(`"${batFilePath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return res.status(500).send(`Stderr: ${stderr}`);
        }
        console.log(`Output: ${stdout}`);
        return res.send(`Output: ${stdout}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
