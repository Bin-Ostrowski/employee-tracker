const inquirer = require('inquirer')
require('console.table')
const db = require('./db')

function start() {
  inquirer.prompt({
    type: 'list',
    name: 'options',
    message: 'What would you like to do?',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
  }).then((res) => {
    switch (res.options) {
      case 'View All Departments':
        viewAllDepartments()
        break;
      case 'View All Roles':
        viewAllRoles()
        break;
        case 'Add Department':
          addDepartment()
          break;
      case 'Add Role':
        addRole()
        break;
        case 'View All Employees':
          viewAllEmployees()
          break;
        case 'Add Employee':
          addEmployee()
          break;
        // case 'Update Employee Role':
        //   updateEmployeeRole()
        //   break;
      default:
        process.exit()
    }
  })
};

function viewAllDepartments() {
  db.findDepartments().then(([data]) => {
    console.table(data)
  }).then(() => start())
};

function viewAllRoles() {
  db.findRoles().then(([data]) => {
    console.table(data)
  }).then(() => start())
};

function viewAllEmployees() {
  db.findEmployees().then(([data]) => {
    console.table(data)
  }).then(() => start())
};

function addRole() {
  db.findDepartments().then(([data]) => {
    const departmentChoices = data.map(({
      id,
      name
    }) => ({
      name: name,
      value: id
    }));

    inquirer.prompt([{
        type: 'input',
        message: 'Please provide the name of the role you are adding:',
        name: 'title'
      },
      {
        type: 'input',
        message: 'Please provide the salary of the role you are adding:',
        name: 'salary'
      },
      {
        type: 'list',
        name: 'department_id',
        message: 'What department does this role belong to?',
        choices: departmentChoices
      }
    ]).then((res) => {
      
      db.addRole(res).then(({res}) => {
        console.log('roll added!')
        start();
      }).catch(err => {
        console.log("Error in create Role: ", err)
      })
    })

  })
};

function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        message: 'Please provide the name of the department you are adding:',
        name: 'name'
      },
    ]).then((res) => {
      db.addDepartment(res).then(({res}) => {
        console.log('Department added!')
        start();
      }).catch(err => {
        console.log("Error in create Role: ", err)
      })
  })
};

function addEmployee() {
db.findDepartments().then(([data]) => {
  const departmentChoices = data.map(({
    id,
    name
  }) => ({
    name: name,
    value: id
  }));

db.findRoles().then(([data]) => {
  const roleChoices = data.map(({
    id,
    title,
  }) => ({
    name: title,
    value: id
  }));


  inquirer.prompt([{
      type: 'input',
      message: 'Please provide the first_name of the employee you are adding:',
      name: 'first_name'
    },
    {
      type: 'input',
      message: 'Please provide the last_name of the employee you are adding:',
      name: 'last_name'
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'What role does this employee have?',
      choices: roleChoices
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'What department does this role belong to?',
      choices: departmentChoices
    }
    // {
    //   type: 'input',
    //   message: 'Please provide the salary of the role you are adding:',
    //   name: 'salary'
    // }
  ]).then((res) => {
    
    db.addEmployee(res).then(({res}) => {
      console.log('Employee added!')
      start();
    }).catch(err => {
      console.log("Error in create Role: ", err)
    })
  })
})
})
};

start();