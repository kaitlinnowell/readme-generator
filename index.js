// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
var questions = [
    {
        type: 'input',
        message: "What is the title of the project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Enter a description of the project",
        name: 'description',
    },
    {   type: 'input',
        message: "Enter installation instructions for the project",
        name: 'installInstructions',
    },
    {   type: 'input',
        message: "Enter usage information",
        name: 'usage',
    },
    {   type: 'input',
        message: "Enter contribution guidelines for new developers",
        name: 'guidelines',
    },
    {   type: 'input',
        message: "Enter test instructions",
        name: 'testInstructions',
    },
    {   type: 'list',
        message: "Select license: ",
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {   type: 'input', 
        message: "What is your GitHub username?",
        name: 'username',
    },
    {   type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("./output/README.md", generateMarkdown({ ...response}))
    })
}

// Function call to initialize app
init();
