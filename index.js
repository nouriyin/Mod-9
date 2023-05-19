// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generatemarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?",
        validate: (input) => {
            return input ? true : 'Please enter a title for your project';
        },

    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub Username?",
        validate: (input) => {
            return input ? true : 'Please enter your GitHub Username.';
        },
    },
    {
        type: "Installation",
        name: "installation",
        message: "What are the installation instructions?",
        validate: (input) => {
            return input ? true : 'Please enter installation instructions';
        }

    },
    {
        type: "input",
        name: "usage",
        message: "How would someone use this application?",
        validate: (input) => {
            return input ? true : 'Please enter usage information';
        }
    },
    {
        type: "input",
        name: "contributions",
        message: "Please list all contributors",
        validate: (input) => {
            return input ? true : 'List all contributors'
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (input) => {
            return input ? true : 'Please enter your email address.';
        },
    }, {
        type: "input",
        name: "description",
        message: "Describe your application",
        validate: (input) => {
            return input ? true : 'Please enter a description of your project.';
        },
    }, {
        type: "input",
        name: "test",
        message: "What are the testing instructions?",
        validate: (input) => {
            return input ? true : 'Please enter testing instructions';
        },
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license",
        choices: ['Apache', 'IBM', 'MIT', 'ISC', 'Mozilla', 'None'],
        validate: (input) => {
            return input ? true : 'Please choose license';
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file is not saved');
    });
}

// TODO: Create a function to initialize app
function init() { }
return inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('generated-README.md', markdown);
        console.log("README.md file has been created!")
    })
    .catch((error) => {
        console.log(error)
    })

// Function call to initialize app
init();
