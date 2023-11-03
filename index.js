// packages - fs & inquirer & jest
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes.js")

// questions - logoText, logoTextColor, logoShape/select choice, logoShapeCholor
const questions = [
  {
    name: "logoText",
    type: "input",
    message: "Enter logo text, up to three characters",
    // lessThanFour(),
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



function writeFileSVG(data) {
  fs.writeFile("./example/logo.svg", data, (err) => {
    err ? console.log("error:", err) : console.log("Generated logo.svg");
  })
}

function generateSVG(response) {
  if (response.logoShape === "Triangle") {
    const triangle = new Triangle(response.logoText, response.logoTextColor, response.logoShapeColor)
    return triangle.render();

  } else if (response.logoShape === "Circle") {
    const circle = new Circle(response.logoText, response.logoTextColor, response.logoShapeColor)
    return circle.render();

  } else if (response.logoShape === "Square") {
    const square = new Square(response.logoText, response.logoTextColor, response.logoShapeColor)
    return square.render();
  }
}

async function init() {
  const response = await inquirer.prompt(questions);

  writeFileSVG(generateSVG(response));
}
init()








/* comments

function lessThanFour() {
  if (response.logoText.input >= 4) {
    console.log("enter 1-3 chracters");
    return;
  }
}

// example test 
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

if (input.length <= 3){
    return true;
  } else {
}

function init() {
 inquirer.prompt(questions)
  .then(response => {
    writeFileSVG(generateSVG(response))
  )}
}

init();

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