// packages
const fs = require("fs");
const inquirer = require("inquirer");
// shapes (deconstructed)
const { Triangle } = require("./lib/shapes.js")

const questions = [
  {
    name: "logoText",
    type: "input",
    message: "Enter logo text, up to three characters"
  },
  {
    name: "logoTextColor",
    type: "input",
    message: "Enter logo text color"
  },
  {
    name: "logoShape",
    type: "list",
    message: "Select logo shape",

    choices: ["Triangle", "Circle", "Square"]
  },
  {
    name: "logoShapeColor",
    type: "input",
    message: "Enter logo shape color"
  }
];

function writeFileSVG(info) {
  fs.writeFile("./example/logo.svg", info, (error) => {
    error ? console.log("error:", error) : console.log("writeFileSVG success");;
  })
}



function generateSVG(response) {
  if (response.shape = "Triangle") {
    const triangle = new Triangle(response.logoText, response.logoTextColor, response.logoShapeColor)
    return triangle.render();
  }
}

async function init() {
  const response = await inquirer.prompt(questions);
  const logoSVG = generateSVG(response);

  writeFileSVG(logoSVG);
}

init();

















/* comments


// example test 
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

if (input.length <= 3){
    return true;
  } else {
    
}

choices: [
      { 
        name: "Triangle"
        value: A 
      },
      { name: "Circle" },
      { name: "Square" },
    ]

function writeFileSVG(fileName) {
  fs.writeFile(fileName, (error) => {
    error ? console.log("error:", error) : console.log("writeFileSVG sucess")
  });
}

function init() {
  inquirer.prompt(questions).then(response => {
    console.log(response);
    writeFileSVG("./example/logo.svg")
  })
}
init();



*/