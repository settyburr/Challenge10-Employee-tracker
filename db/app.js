const inquirer = require('inquirer');


function viewDepartments() {
   const query = 'SELECT *, name FROM department';

   connection.query(query, (err, results) => {
    if(err){
        console.error('Error retrieving departments:', err);
        return;
    }
    console.log('Departments:');
    console.table(results);
   })
}

function viewRoles() {
    const query = 'SELECT *, name FROM role';
 
    connection.query(query, (err, results) => {
     if(err){
         console.error('Error retrieving roles:', err);
         return;
     }
     console.log('Roles:');
     console.table(results);
    })
 }

 function viewEmployees() {
    const query = 'SELECT *, name FROM employee';
 
    connection.query(query, (err, results) => {
     if(err){
         console.error('Error retrieving employees:', err);
         return;
     }
     console.log('Employees:');
     console.table(results);
    })
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
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee Role',
        ],

    }
]).then(answers => {
    if(answers.initialAction === 'View all deprtments') {
        viewDepartments();

    } if(answers.initialAction === 'View all roles') {
        viewRoles();

    } if(answers.initialAction === 'View all employees') {
        viewEmployees();

    } if(answers.initialAction === 'Add a department') {
        addDepartment();

    } if(answers.initialAction === 'Add an employee') {
        addEmployee();

    }  if(answers.initialAction === 'Update an employee role') {
        updateEmployee();
    }
});

