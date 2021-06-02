// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require("./")


const writeFileAsync = util.promisify(fs.writeFile);


// Inquirer to generate questions
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What is the installation process?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Is there a test included?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose the appropriate license for this project',
        choices: ['MIT',
         'Apache ',
          'GPLv3',
           'N/A']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is you Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
    ]);
  };


  // Read Me Template
    const generateReadMe = (answers) =>
    `# ${answers.title}

  ## Table of Contents
  =================

  * [Description](#Descrption)
  * [Installation](Installation)
  * [Usage](#Usage)
  * [Contibutors](#Contributors)
  * [Test](#Test)
  * [License](#License)
  * [Contact](#Contact)
  
  ## Description 
    ${answers.description}
  
  ## Installation 
    ${answers.install}

  ## What is the project used for? 
    ${answers.usage}

  ## Contributors 
    ${answers.contribution}

  ## Test
    ${answers.test}

  ## License
    ${answers.license}

  ## Contact 
  Github | Email 
  --- | ---
  ${answers.github} | ${answers.email}`
    ;


    const init = () => {
      promptUser()
        .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
    };
    
    init();