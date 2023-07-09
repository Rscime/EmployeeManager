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
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add a Role', 'Add an Employee', 'Update Employee Role'],
    },
];

function init() {
    inquirer
        .prompt(selection)
        .then((data) => {
            if (data.selection === 'View Departments'){
                db.query('SELECT * FROM department', function (err, results) {
                    console.log(results);
                });
            }
        })
}

//call function
init();