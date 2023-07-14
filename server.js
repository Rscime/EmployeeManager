const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,(
      user: 'root',
      // MySQL password
      password: 'ScimeSQL5598!',
      database: 'organization_db'
    },
    console.log(`Connected to the organization_db database.`)
  );

//Initial Inquirer Questions:
const selection = [
    {
        type:'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add a Role', 'Add an Employee', 'Update Employee Role', 'QUIT'],
    },
];


//User Selection function:
function init() {
    inquirer
        .prompt(selection)
        .then((data) => {
                if (data.selection === 'View Departments'){
                    db.query('SELECT * FROM department', (err, results) => {
                        if (err){
                            console.log('Error pulling table');
                        } else{
                            console.log('');
                            console.log('Departments:');
                            console.table(results);
                            init();
                        }
                    });
                } else if (data.selection === 'View Roles'){
                    db.query('SELECT * FROM roles', (err, results) => {
                        if (err){
                            console.log('Error pulling table');
                        } else{
                            console.log('');
                            console.log('Roles:');
                            console.table(results);
                            init();
                        }
                    })
                } else if (data.selection === 'View Employees'){
                    db.query('SELECT * FROM employee', (err, results) => {
                        if (err){
                            console.log('Error pulling table');
                        } else{
                            console.log('');
                            console.log('Employees:');
                            console.table(results);
                            init();
                        }
                    })
                } else if (data.selection === 'Add Department'){
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'department',
                                message: 'What is the name of the department you would like to add?'
                            }
                        ])
                        .then((data) => 
                                db.query('INSERT INTO department (dept_name) VALUES (?)', [data.department], (err, results) => { 
                                    if (err){
                                        console.log('Error adding department to table');
                                    } else{
                                        console.log('Department Successfully Added');
                                        db.query('SELECT * FROM department', (err, results) => {
                                            if (err){
                                                console.log('Error pulling table');
                                            } else{
                                                console.log('Department added to table');
                                                init();
                                            }
                                        })
                                    }
                                }))
                } else if (data.selection === 'Add a Role'){
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the id number of the role you would like to add?'
                            },
                            {
                                type: 'input',
                                name: 'role',
                                message: 'What is the name of the role you would like to add?'
                            },
                            {
                                type: 'input',
                                name: 'salary',
                                message: 'What is the salary of this new role?'
                            },
                            {
                                type: 'input',
                                name: 'dept_id',
                                message: 'What department will this role fall under?'
                            }
                        ])
                        .then((data) => 
                                db.query('INSERT INTO roles (id, role_title, salary, dept_id) VALUES (?,?,?,?)', [data.id, data.role, data.salary, data.dept_id], (err, results) => { 
                                    if (err){
                                        console.log('Error adding role to table');
                                    } else{
                                        console.log('Role added to table');
                                        init();
                                    }
                                }))
                } else if (data.selection === 'Add an Employee'){
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the id number for the new employee?'
                            },
                            {
                                type: 'input',
                                name: 'first',
                                message: 'What is the first name of this employee?'
                            },
                            {
                                type: 'input',
                                name: 'last',
                                message: 'What is the last name of this employee?'
                            },
                            {
                                type: 'input',
                                name: 'role_id',
                                message: 'What role id will the new employee have?'
                            },
                            {
                                type: 'input',
                                name: 'manager_id',
                                message: 'What will thier managers id be?'
                            }
                        ])
                        .then((data) => 
                                db.query('INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)', [data.id, data.first, data.last, data.role_id, data.manager_id], (err, results) => { 
                                    if (err){
                                        console.log('Error adding employee to table');
                                    } else{
                                        console.log('Employee Successfully Added');
                                        init();
                                    }
                                }))
                } else if (data.selection === 'Update Employee Role') {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is that last name of the employee you woulld like to update?'
                            },
                            {
                                type: 'input',
                                name: 'role',
                                message: 'What is the title of thier new role?'
                            },
                        ])
                        .then((data) => 
                            db.query('UPDATE employee SET ? WHERE ?', [{role_title: role}, {last_name: name}], (err, results) => {
                                if (err){
                                    console.log('Error updating employee');
                                } else{
                                    console.log('Employee role successfully updated');
                                    init();
                                }
                            }) 
                        )
                }else {
                   console.log("Thank you for using the Employee Manager");
                }
        })
};

//call function
init();