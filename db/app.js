const inquirer = require('inquirer');
const { viewDepartments } = require('./db/index')

inquirer.prompt ([
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

