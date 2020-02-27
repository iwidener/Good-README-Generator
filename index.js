const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "username",
        message: "Your GitHub username: "
    },
    {
        type: "input",
        name: "title",
        message: "Your Project Title"
    },
    {
        type: "input",
        name: "description",
        message: "A short description of your project."
    },
    {
        type: "input",
        name: "table of contents",
        message: "Add a table of contents to make it easy for users to find what they need."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots."
    },
    {
        type: "input",
        name: "license",
        message: "Let other developers know what they can and cannot do with your project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Add guidelines how other developers can contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application. Provide examples on how to run them."
    },
    {
        type: "input",
        name: "questions",
        message: "Please, ask me about my project."
    },
    {
        type: "input",
        name: "badge",
        message: "Let other developers know that you know what you are doing."
    },
];

async function init() {
    console.log("Hello!")
    try {
        const inquirerResponse = await inquirer.prompt(questions);
        const githubResponse = await api.getUser(inquirerResponse.username);
        console.log(githubResponse);

        const md = generateMarkdown(inquirerResponse, githubResponse.data);
        await writeFileAsync('README.md', md);
        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}

init();
