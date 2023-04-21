// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';

  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPLv3') {
    return '[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return 'License badge not avaible for this license.';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  const links = {
    "MIT": "[MIT](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)",
    "GPLv3":  "[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)",
  };
  return links[license] || '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
  
This project is covered under the ${renderLicenseLink(license)} license.`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

* [Installation](##installation)
* [Usage](##usage)
* [Contribution](##contribution)
* [Test](##test)
* [Questions](##questions)
${data.license ? '* [License](##license)' : ''}


## Installation

${data.installation}

## Usage 

${data.usage}


## Contribution

${data.contributing}
  
## Test

${data.tests}

## Questions

[my github](https://github.com/${data.username})

you can reach me at ${data.email}.

${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
