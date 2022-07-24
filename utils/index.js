const util = require('util');
const inquirer = require('inquirer');

// prompt uswer for what they want to do
const firstQuestion = [
    { 
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
    }
];

//add department
const addDepartment = [
    //add department
    {
        type: 'input',
        name: 'addDepartment',
        message: 'Enter the name of the department. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the name of the department!");
                return false;
            }
        }
    }
];

//add role 
const addRoll = [
    {
        type: 'input',
        name: 'addRoleName',
        message: 'Enter the mame of the new role. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the mame of the new role!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'addRoleSalary',
        message: "Enter the role's salary. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the role's salary!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'addRoleDepartment',
        message: "Enter the role's department. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the role's department!");
                return false;
            }
        }
    }
];

// Add employee
const addEmployee = [
    {
        type: 'input',
        name: 'addFirst_name',
        message: "Enter the employee's first name. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter employee's first name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'addLast_name',
        message: "Enter the employee's last name. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter employee's last name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'addEmployeeRole',
        message: "Enter the employee's role. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter employee's role!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'addEmployeeManager',
        message: "Enter the employee's manager. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter employee's manager!");
                return false;
            }
        }
    }
];

// Update an employee role
const updateEmployeeRole = [
    { 
        type: 'list',
        name: 'updateEmployeeRole',
        message: 'Select an employee to update their new role? (Use arrow keys)',

        //how to pull current employees from db
        choices: ['', '', '', ''],
    }
];

//function to initalize app
function runQuestion() {
    return inquirer.prompt(firstQuestion)
    .then((answer) => {
        //function to get first answer 
        //use filter or if statments?
        if (answer === 'View All Employees') {
            //get employee table
        } else if (answer === 'Add Employee') {
            addEmployeePrompt();
               
        } else if (answer === 'Update Employee Role') {
            updateEmployeeRolePrompt();
        } else {
            //finish from first question list
        }

    })
    .catch((error) => {
        console.log(error)
    })
};

//prompt add employee and send answers to POST route. 
function addEmployeePrompt() {
    return inquirer.prompt(addEmployee)
    .then((answers) => {
        // Add epmployee to db
        
    })
};


//initialize app
runQuestion();

//prompt update employee and send answers to POST route 
updateEmployeeRolePrompt();

// 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All departments', 'Add department'