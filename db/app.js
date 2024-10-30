const inquirer = require('inquirer');


function viewDepartments() {
    console.log('Departments');
    console.table(departments);
    
}

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

