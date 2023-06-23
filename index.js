const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./lib/shapes.js")

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What shape would you like?',
      name: 'shape',
      choices: ["square","circle","triangle"]
    },
    {
      type: 'input',
      message: 'What color would you like the text to be?',
      name: 'textcolor',
    },
    {
      type: 'input',
      message: 'What color would you like the shape to be?',
      name: 'fillcolor',
    },
    {
        type: 'input',
        message: 'What would you like the logo to say?',
        name: 'text',
      },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
