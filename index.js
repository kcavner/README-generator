// required modules
const inquirer = require('inquirer');
const fs = require('fs');

// inquirer prompt questions
inquirer.prompt([
{
    type:'input',
    message:'Enter the title',
    name:'title'
},
{
    type:'input',
    message:'Enter the description',
    name:'description'
},
{
    type:'input',
    message:'Enter the installation instructions',
    name:'installation'
},
{
    type:'input',
    message:'Enter the usage information',
    name:'usage'
},
{
    type:'input',
    message:'Enter the contribution guidelines',
    name:'guidelines'
},
{
    type:'input',
    message:'Enter the test instructions',
    name:'instructions'
},
{
    type:'list',
    message:'choose your liscence',
    choices:['mit','not mit'],
    name:'liscence'
},
{
    type:'input',
    message:'Enter your github username',
    name:'username'
},
{
    type:'input',
    message:'Enter your email',
    name:'email'
},
]).then((answers) => {
//     mit badge if statment changes the value to the mit badge
    if(answers.liscence = 'mit'){
        answers.liscence = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}
    
//     readme template literal has predefined sections and table of contents
    const readme =
`
# ${answers.title}${answers.liscence}

## table of contents 
    
1.[ description](#description)
    
2.[ installation](#installation)
    
3.[ usage](#usage)
    
4.[ license](#license)
    
5.[ contributing](#contributing)
    
6.[ tests](#tests)
    
7.[ questions](#questions)
    
## description
${answers.desciption}
      
## installation
${answers.installation}
    
## usage
${answers.usage}
    
## contributing
${answers.guidelines}
    
## tests
${answers.instructions}
    
## questions
${answers.username} ${answers.email}`
//     write readme file with the file system module
fs.writeFile("README.md", readme, (err) =>
err ? console.error(err) : console.log('Success!'))
})
