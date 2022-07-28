const connection = require('./connection');

class Data {
    constructor(connection){
        this.connection = connection
    };

    findDepartments(){
        return this.connection.promise().query('SELECT * FROM department;')
    };

    addDepartment(departmentData) {
        return this.connection.promise().query('INSERT INTO department SET ?', departmentData)
    };

    findRoles(){
        return this.connection.promise().query('SELECT role.id, role.title, department.name AS departmentName, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;')
    };

    addRole(roleData){
        return this.connection.promise().query('INSERT INTO role SET ?', roleData)
    };

    findEmployees(){
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title AS jobTitle, role.salary AS salary, department.name AS departmentName, employee.manager_id AS manager FROM employee INNER JOIN role ON employee.role_id = role.id LEFT JOIN department ON employee.department_id = department.id;')
    };
};

module.exports = new Data(connection);