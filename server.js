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

  //Get all departments

app.get('/api/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  //GET all roles (link department_name from departments table)
  app.get('/api/roles', (req, res) => {
          const sql = `SELECT * FROM roles`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});

//GET all employees (link from roles(title, salaries) department, manager_id 
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});

//POST new Department
app.post('/api/departments', ({ body }, res) => {
    const sql = `INSERT INTO departments (id, department_name)
    VALUES (?,?)`;
    const params = [9, "new department"]; //this will be from inquire input
    
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});


//POST new employee
app.post('/api/employees', ({ body }, res) => {
    const sql = `INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?,?)`;
    const params = [body.id, body.first_name, body.last_name, body.role_id, body.manager_id];; //this will be from inquire input
    
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});


//UPDATE employee role // NEEDS FIXING!!!
app.put('/api/employees', (req, res) => {
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];

    db.query(sql, params, (err, result) => {
        if(err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});


// Default response for any other requests (Not Found)
app.use((req, res) => {
    res.status(400).end();
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