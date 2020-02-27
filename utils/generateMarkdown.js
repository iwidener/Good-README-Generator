function generateMarkdown(inquirerResponse, githubResponse) {
  return `
### ${githubResponse.login}

# **Your Project Title:** ${inquirerResponse.title}
<p>&nbsp;</p>

## **Description**<hr />
### ${inquirerResponse.description}
<p>&nbsp;</p>

## **Table of Contents**<hr />
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [License](#License)
<p>&nbsp;</p>

## **Installation**<hr />
### ${inquirerResponse.installation}
<p>&nbsp;</p>

## **Usage**<hr />
### ${inquirerResponse.usage}
<p>&nbsp;</p>

## **License**<hr />
### ${inquirerResponse.license}
<p>&nbsp;</p>

## **Contributing**<hr />
### ${inquirerResponse.contributing}
<p>&nbsp;</p>

## **Tests**<hr />
### ${inquirerResponse.tests}
<p>&nbsp;</p>

## **Questions**
  * [GitHub email](${githubResponse.email})

    ![GitHub profile picture](${githubResponse.avatar_url})
 
## **Badges**<hr />
### ${inquirerResponse.badge}
<img src="https://img.shields.io/badge/license-MIT-blue.svg">
<p>&nbsp;</p>
`;
}

module.exports = generateMarkdown;