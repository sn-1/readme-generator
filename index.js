const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

const questions = [
    {
        type: "input",
        name: "GitHubUsername",
        message: "enter your GitHub username?"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "enter the Project's Title name?"
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Please give a short description of the project."
    },
    {
        type: "input",
        name: "Install",
        message: "What are the steps to install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Please enter an examples."
    },
    {
        type: "list",
        name: "License",
        message: 'Choose a license the for project.',
        choices: [{
            name: 'GNU General Public License v3.0',
            },
            {
            name: 'MIT License'
            },
            {
            name: 'The Unlicense'
            },
        
        ]},
    {
        type: 'input',
        name: 'Contributors',
        message: 'How many contributors will there be in the project?',
        validate: validateContributors
    }

];




function validateContributors(num)
{
   var reg = /^\d+$/;
   return reg.test(num) || 'Please enter a valid number';
}

function promptUser(){
    return inquirer.prompt(questions)
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.error(err);
        }
    });
}

async function init() {
    console.log("Welcome to the README Generator!")
    try {
        const answers = await promptUser();
        const user = await api.getUser(answers.GitHubUsername);
        const readMe = generateMarkdown(answers, user);
        writeToFile("readMe.md", readMe);
        console.log("The Readme file has been successfully created!");
        
    }catch(err) {
        console.log(err);
        
    }
    

}

init();
