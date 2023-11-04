// import shape classes  
const { Triangle, Circle, Square } = require("./shapes.js")

describe("Triangle shape class test", () => {
  it("test if logo shape color is blue",)
})
const shape = new Triangle();
logoShapeColor.setColor("blue");
expect(logoShape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');











/* comments 
-----------------------------

The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```


-----------------------------
// triangle test
describe('Triangle', () => {
  test('renders correctly', () => {
    const shape = new Triangle();
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.logoShapeColor}"/>
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
      </svg>`);
  });
});

// circle test
describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle();
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.logoShapeColor}"/>
      <text x="150" y="110" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
      </svg>`);
  });
});

// square test
describe('Square', () => {
  test('renders correctly', () => {
    const shape = new Square();
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="20" width="180" height="180" fill="${this.logoShapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
      </svg>`);
  });
});
 
// triangle test
describe('Triangle testing..', () => {
  test('test for a green triangle shape', () => {
    const triangle = new Triangle();
   triangle.setColor("green");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green"/>');
  });
});

// circle test
describe('Circle testing..', () => {
  test('test for a blue circle shape', () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
  });
});

// square test
describe('Square testing..', () => {
  test('test for red square shape', () => {
    const square = new Square();
    square.setColor("red")
    expect(square.render()).toEqual('<rect x="60" y="20" width="180" height="180" fill="red" />');
  });
});



// from README
 const triangle = new Triangle();
expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.logoShapeColor}"/>`);

Use .toBeInstanceOf(Class) to check that an object is an instance of a class. This matcher uses instanceof underneath.

class A {}

expect(new A()).toBeInstanceOf(A);
expect(() => {}).toBeInstanceOf(Function);
expect(new A()).toBeInstanceOf(Function); // throws

**/