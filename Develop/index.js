// TODO: Include packages needed for this application

const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
   { 
      name: 'title',
      message: 'What is the title of your project?',
      type: 'input',    
   },

   {
       name: 'description',
       message: 'provide a description',
       type: 'input',
   },
   {
       name:'installation',
       message: 'what are the steps to install your project',
       type:'input',
   },
   {
       name:'usage',
       message:'how do you use the app',
       type:'input',
   },
   {
       name:'contributing',
       message:'guidelines on how to add more',
       type:'input',
   },
   {
       name:'tests',
       message:'provide examples on how to run them here',
       type:'input',
   },
   {
       name:'license',
       message:'pick a license',
       type:'list',
       choices:['MIT','Apache 2.0', 'GPLv3'],
   },
   {
       name:'username',
       message:'enter github username',
       type: 'input',
   },
   {
       name:'email',
       message:'enter your email',
       type:'input',
   },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, (err) => {
        console.log(err);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule()
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile(answers.title.toUpperCase(), markdown)
        }) 
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
