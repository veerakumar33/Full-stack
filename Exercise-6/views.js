const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the marks input page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle marks calculation
app.post('/calculate', (req, res) => {
    const { subject1, subject2, subject3, subject4, subject5 } = req.body;

    // Convert input values to numbers
    const marks = [
        Number(subject1),
        Number(subject2),
        Number(subject3),
        Number(subject4),
        Number(subject5)
    ];

    const total = marks.reduce((acc, mark) => acc + mark, 0);
    const average = total / marks.length;

    // Send the results back to the client
    res.send(`
        <h2>Results</h2>
        <p>Total Marks: ${total}</p>
        <p>Average Marks: ${average.toFixed(2)}</p>
        <a href="/">Go Back</a>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
