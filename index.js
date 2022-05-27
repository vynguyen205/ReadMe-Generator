// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const chalk = require("chalk");
const fs = require('fs');

//choices
const languages = [
  "JavaScript (React.js and Node.js)", 
  "Python",
  "HTML",
  "CSS",
  "C++",
  "TypeScript",
  "Rust",
  "Scheme",
  "Java", 
  "Kotlin",
  "C#",
  "Perl",
  "PHP",
  "Scala", 
  "Swift",
  "MATLAB",
  "SQL",
  "R Programming Language",
  "Golang (Go)",
  "Ruby",
]
const licenses = [
"GNU AGPLv3",
"GNU GPLv3",
"GNU LGPLv3",
"Mozilla",
"MIT",
"Apache",
"Boost",
]

const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'Title of your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Quick description of your project.',
          default: 'Keep it short and sweet :)'
        },
        {
          type: 'input',
          name: 'visual',
          message: 'Please include a preview of your project.',
          default: 'Video, gif or screenshot'
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Quick installation instructions for your project.',
          default: 'Clone repo, run npm init, install dependencies, run node'
        },
        {
          type: 'input',
          name: 'clone',
          message: 'Link to clone your repo for this project.',
          default: 'HTTPS, SSH, GitHub CLI'
        },
        {
          type: 'checkbox',
          name: 'technologies',
          message: 'What language(s) did you use for this project?',
          choices: languages,
        },
        {
          type: 'list',
          name: 'license',
          message: 'Please select license you used for this project.',
          choices: licenses,
        },
        {
          type: 'input',
          name: 'githubLink',
          message: 'Please include a link to your Github repo for this project.',
        },
        {
          type: 'input',
          name: 'deployedLink',
          message: 'Please include a deployed link of your project.',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Quick instructions on how to use this.',
        },
        {
          type: 'input',
          name: 'author',
          message: 'Please input first and last name of author',
        },
        {
          type: 'input',
          name: 'userName',
          message: 'What is your Github username?',
        },
        {
          type: 'input',
          name: 'userEmail',
          message: 'What is your email address?',
        },

      ]
      
// TODO: Create a function to write README file
function createReadMe(data) {
    data.licenseBadge = licenseBadge(data.license);
    fs.writeFileSync('./READMe.md', `
# ${data.title}

  ${data.description}

  ${data.licenseBadge}

---

## Contents 🗒

1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Project Preview](#project%20preview)
2. [Installation](#installation)
3. [Technologies](#technologies)
4. [License](#license)
5. [Contributing](#contributing)
6. [Authors and acknowledgment](#authors%20and%20acknowledgment)
7. [Contacts](#contacts)

---

## About 📋


---

## User Story 👩🏻‍🏫

>

---

## Acceptance Criteria 🌈

>

---

## Project Preview 📸

![Visual](${data.visual})

---

## Installation 📀

  ${data.installation}

  To clone the repo:

    git clone 
    
    ${data.clone}

---

## Technologies 👩🏻‍🔧

- ${data.technologies}

---

## License 👮🏻‍♀️
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Contributing 💃🏻

To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.

---

## Links 🔗 

**[GitHub Link 🐱](${data.githubLink})**

<br>

**[Deployed Link 👀](${data.deployedLink})**

---

## Usage Instructions 💻

${data.usage}

---

## Authors and Acknowledgments ✨

Built by ${data.author}

---

## Contacts ☎️

- GitHub Username: [${data.userName}](https://github.com/${data.userName})
- GitHub Email: ${data.userEmail}
  
`);
}

inquirer
  .prompt(questions)
  .then((data) => {
    createReadMe(data)
    console.log(chalk.green("🐣 Created ReadMe Successfully"))
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(`Prompt couldn't be rendered in the current environment!`)
    } else {
      console.error (`Something else went wrong!`, error)
    }
  });


function licenseBadge(value) {
  if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}