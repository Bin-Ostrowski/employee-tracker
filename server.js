const express = require('express');
// const db = require('./db/connection');
// const apiRoutes = require('./routes/apiRoutes');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use ApiRoutes
// app.use('/api', apiRoutes);

//test
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

// Default response for any other requests (Not Found)
app.use((req, res) => {
    res.status(400).end();
});


//test  // Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
      // Your MySQL password
      password: 'Mysql-0892',
      database: 'employees'
    },
    console.log('Connected to the employees database.')
  );

  db.query(`SELECT * FROM departments`, (err, rows) => {
      console.log(rows);
    });

    
  app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });


   
    //Start server after DB connection
    // db.connect(err => {
    //     if (err) throw err;
    //     console.log('Connected to the employees database');
    //     app.listen(PORT, () => {
    //         console.log(`Server running on port http://localhost:${PORT}`);
    //     });
    // });