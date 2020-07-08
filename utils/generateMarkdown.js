function generateMarkdown(inquirerResponse, githubResponse) {
  return `
### ${githubResponse.login}

# **Project Title:** ${inquirerResponse.title}
<p>&nbsp;</p>

## **Description**
### ${inquirerResponse.description}
<p>&nbsp;</p>

## **Table of Contents**
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [License](#License)
<p>&nbsp;</p>

## **Installation**
### ${inquirerResponse.installation}
<p>&nbsp;</p>

## **Usage**
### ${inquirerResponse.usage}
<p>&nbsp;</p>

## **License**
### ${inquirerResponse.license}
<p>&nbsp;</p>

## **Contributing**
### ${inquirerResponse.contributing}
<p>&nbsp;</p>

## **Tests**
### ${inquirerResponse.tests}
<p>&nbsp;</p>

## **Questions**
  * [GitHub email](${githubResponse.email})

    ![GitHub profile picture](${githubResponse.avatar_url})
 
## **Badges**
### ${inquirerResponse.badge}
<img src="https://img.shields.io/badge/license-MIT-blue.svg">
<p>&nbsp;</p>
`;
}

module.exports = generateMarkdown;
