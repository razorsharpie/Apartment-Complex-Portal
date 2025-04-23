const express = require('express');
const mysql = require('mysql2');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Connect to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Sarah',
    password: 'csma623',
    database: 'miniproject1'
});

// Endpoint to fetch all rows
app.get('/dues', (req, res) => {
    db.query('SELECT * FROM dues', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Endpoint to update row
app.post('/update-dues', (req, res) => {
    const { residentName, flatNumber, dueAmount, lastPaid } = req.body;
    db.query(
        'UPDATE dues SET resident_name = ?, due_amt = ?, last_pd = ? WHERE flat_no = ?',
        [residentName, dueAmount, lastPaid, flatNumber],
        (error) => {
            if (error) throw error;
            res.send('Update successful');
        }
    );
});

app.listen(3000, () => console.log('Server running on port 3000'));