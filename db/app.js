const inquirer = require('inquirer');
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_tracker_db',
    password: 'Rootroot',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));


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
.prompt ([
    {
        type: 'list',
        name: 'initialAction',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a eprartment',
            'Add a role',
            'Add an employee',
            'Update an employee Role',
        ],
    }
]).then(answers => {
    if(answers.initialAction === 'View all deprtments') {
        viewDepartments();
    }
});
}

menu();


