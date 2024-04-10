// TODO: Include packages needed for this application
var inquirer = require("inquirer");

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
        choices: ['MT', 'other'],
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => 
        console.log(response.title))
}

// Function call to initialize app
init();
