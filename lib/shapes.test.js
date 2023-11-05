
const { Triangle, Circle, Square } = require("../lib/shapes.js");

// triangle test
describe('Triangle', () => {
  it("test svg render", () => {
    const triangleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">svg</text>
      </svg>`;
    const triangle = new Triangle("svg", "white", "blue");
    expect(triangle.render()).toEqual(triangleSVG);
  });
});


// circle test
describe('Circle', () => {
  test('test svg render', () => {
    const circleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="green"/>
      <text x="150" y="110" font-size="60" text-anchor="middle" fill="gray">git</text>
      </svg>`;
    const circle = new Circle("git", "gray", "green")
    expect(circle.render()).toEqual(circleSVG);
  });
});

// square test
describe('Square', () => {
  test('test svg render', () => {
    const squareSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="20" width="180" height="180" fill="orange" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">yay</text>
      </svg>`;
    const square = new Square("yay", "black", "orange")
    expect(square.render()).toEqual(squareSVG);
  });
});

/* comments 

The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```

-----------------------------

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
</svg >
describe('Triangle testing..', () => {
  test('test for a green triangle shape', () => {
    const triangle = new Triangle();
   triangle.setColor("green");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green"/>');
  });
});

describe('Circle testing..', () => {
  test('test for a blue circle shape', () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
  });
});

*/




