// import shapes (deconstructed) & create testing suite
const { Triangle, Circle, Square } = require("./shapes.js")

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
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
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


// from README
// const triangle = new Triangle();
// expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.logoShapeColor}"/>`);
