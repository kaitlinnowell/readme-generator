// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'APACHE 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'GPL 3.0':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'BSD 3':
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
      break;
    case 'APACHE 2.0':
      return "https://opensource.org/licenses/Apache-2.0"
      break;
    case 'GPL 3.0':
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case 'BSD 3':
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      return "";
      break
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  if (link == "") {
    return "";
  } else {
    return `This application uses the ${license} license. 
More information about this license can be found at the link below:
    
${link}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installInstructions}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## How to Contribute

${data.guidelines}

## Tests

${data.testInstructions}

## Questions

For additional questions, the author can be reached by email at:
${data.email}

Github profile for user ${data.username}:
https://github.com/${data.username}/
`;
}

module.exports = generateMarkdown;
