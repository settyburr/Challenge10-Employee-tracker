const inquirer = require('inquirer');
const { Client } = require('pg');
const fs = require('fs');


function viewDepartments() {
    const query = 'SELECT * FROM department';
    

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving departments:', err);
            return;
        }
        console.log('Departments:');
        console.table(results); 
    });
}

function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'initialAction',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                ],
            },
        ])
        .then((answers) => {
            if (answers.initialAction === 'View all departments') {
                viewDepartments();
            }
        });
}

menu();


