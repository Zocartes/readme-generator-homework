//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
 {
    type: 'input',
    message: "What is your projects name?",
    name: 'title', 
    validate: function validateTitle(title){
        return title !== '';
    },
 },
 {
     type: 'input',
     message: "Provide a description of your project",
     name: 'description',
     validate: function validateDescription(description){
        return description !== '';
    },
 },
 {
     type: 'input',
     message: "What commands need to be run to install dependencies?",
     name: 'install',
     default: "npm i inquirer",
     validate: function validateInstall(install){
        return install !== '';
     },
 },
 {
     type: 'input',
     message: "What information will the user need in order to use the repo?",
     name: 'usage',
     validate: function validateUsage(usage){
        return usage !== '';
     },
 },
 {
     type: 'input',
     message: "What information will the user need in order to contribute the repo?",
     name: 'contribute',
     validate: function validateContribute(contribute){
        return contribute !== '';
     },
 },
 {
     type: 'input',
     message: "What commands need to be run to run tests?",
     name: 'test',
     default: "npm test",
     validate: function validateTest(test){
        return test !== '';
     },
 },
 {
     type: 'list',
     message: "What kind of license does your project use?",
     choices: [ "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
     name: 'license',
 },
 {
     type: 'input',
     message: "What is your GitHub username?",
     name: 'github',
     validate: function validateGithub(github){
        return github !== '';
     },
 },
 {
     type: 'input',
     message: "What is your email address?",
     name: 'email',
     validate: function validateEmail(email){
        return email !== '';
     },
 },
];

// function to initialize app
function init() {
    inquirer.prompt( [...questions])
    .then ((answers) => {
        fs.writeFileSync('SAMPLEREADME.md', gm(answers));
        console.log("README file succesfully created!");
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();