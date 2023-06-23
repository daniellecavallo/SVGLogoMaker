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
  .then((response) => {
  let shape;
  if (response.shape==="square"){
    shape = new Square()
  } else if (response.shape === "circle"){
    shape = new Circle()
  } else {
    shape = new Triangle()
  }
    const template=`
    <svg height="500" width="500">
    ${shape}
    <text x="0" y="0" fill="${response.textcolor}">${response.text}</text>
  </svg>`
});