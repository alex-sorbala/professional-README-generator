// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'Enter the title',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Provide the description of the application:',
    name: 'description',
    },
    {
    type: 'input',
    message: 'Provide the instalation instructions:',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'Provide the usage information:',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'What are the contibutors? Enter a list of @usernames, or @organization',
    name: 'contributors',
    },
    {
    type: 'input',
    message: 'How do you test the application',
    name: 'tests',
    },
    {
    type: 'list',
    message: 'Select a license',
    name: 'license',
    choices: ['MIT License','Apache Licence 2.0', 'GNU General Public License v3.0', 'None'],
    },
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
    },
    {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('File sucessfully created/updated !')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        writeToFile('newREADME.md', generateMarkdown(response))
    );
}

// Function call to initialize app
init();

