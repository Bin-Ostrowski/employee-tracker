const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use ApiRoutes
app.use('/api', apiRoutes);

// Default response for any other requests (Not Found)
app.use((req, res) => {
    res.status(400).end();
});

//Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Connected to the employees database');
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`);
    });
});
