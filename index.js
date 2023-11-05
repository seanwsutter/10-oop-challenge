// import packages - fs & inquirer 
const fs = require("fs");
const inquirer = require("inquirer");

// import shape classes 
const { Triangle, Circle, Square } = require("./lib/shapes.js");

questions = [
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
]

// generate logo.svg file
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

// initialize logo generator
async function init() {
  const response = await inquirer.prompt(questions);
  console.log(response);
  writeFileSVG(generateSVG(response));
}
init()

function writeFileSVG(data) {
  fs.writeFile("./example/logo.svg", data, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg, check example folder.."));
}

/* 

Process
  ask questions
  subclass you choose is based on shape the user chooses
  subclass extends the parent class

Properties
  logo text
  logo text color
  logo shape
  logo shape color

Use methods for:
  whatever work all shapes of any kind need
  whatever work any individual shapoes need
  write a file containing the final SVG code

Write unit tests to verify that these methods work

Jest - install as dev dependency 
Testing
  write code first
  write automated test to run the code under specific conditions
  we tell the test by defining what the successful result should look like under those conditions

*/

/* comments

// write logo.svg file to example folder
  function writeFileSVG(fileName, data) {
    fs.writeFile("./example/logo.svg", data, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg, check example folder.."));
  }

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

  // initialize logo generator
  async function init() {
    const response = await inquirer.prompt(questions);
    console.log(response);
    writeFileSVG(generateSVG(response));

  }
  init()

function lessThanFour() {
  if (response.text.input >= 4) {
    console.log("enter 1-3 chracters");
    return;
  }
}

function lessThanFour(userInput) {
  var userInput;
    if (response.logoText.length > 0 && response.logoText.length < 4) {
      userInput = response.logoText
    } else {
      console.log("please enter 1-3 characters");
      return;
    } 
}
// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the BlogPost class constructor.
const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  'Dogs, cats, and snakes are super cute!',
  '12/19/2021'
);

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment(
  'Jane Doe',
  'This post is really awesome!',
  '12/20/2021',
  '🐶😺🐍'
);
// TODO: Log both newly created BlogPost and Comment to the console.
console.log(newPost);
console.log(newComment);

shapeColorOption = response.logoShapeColor
console.log("shape color:", shapeColorOption);
shapeOption = response["logoShape"]
console.log("shape:", shapeOption);

//example test 
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