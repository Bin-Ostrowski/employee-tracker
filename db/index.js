const connection = require('./connection')

class Data {
    constructor(connection){
        this.connection = connection
    }

    findDepartments(){
        return this.connection.promise().query('SELECT * FROM department;')
    }

    findRoles(){
        return this.connection.promise().query('SELECT role.id, role.title, department.name AS departmentName, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;')
    }

    addRole(roleData){
        return this.connection.promise().query('INSERT INTO role SET ?',roleData)
    }

    // findEmployees(){
    //     return this.connection.promise().query('SELECT * FROM employee ')
    // }
}

module.exports = new Data(connection)