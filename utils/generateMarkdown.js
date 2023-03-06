// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "None"){
    return '';
  }

  let ecodedImageURI = encodeURI('https://img.shields.io/static/v1?label=License&message=' + license + '&color=green')

  return '[![License](' + ecodedImageURI + ')](LICENSE)'
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "None"){
    return 'No license information provided';
  }
  return 'This application is covered under the [' + license + '](LICENSE)'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  #### Table of contents:
  - [Description](#description)
  - [Instalation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ---
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Ask @${data.username} a question. You can reach me by email [${data.email}]()

  `;
}

module.exports = generateMarkdown;
