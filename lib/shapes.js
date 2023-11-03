// triangle
class Triangle {
  constructor(logoText, logoTextColor, logoShapeColor) {
    this.logoText = logoText
    this.logoTextColor = logoTextColor
    this.logoShapeColor = logoShapeColor
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.logoShapeColor}"/>
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
      </svg>`;
  }
};

// circle
class Circle {
  constructor(logoText, logoTextColor, logoShapeColor) {
    this.logoText = logoText
    this.logoTextColor = logoTextColor
    this.logoShapeColor = logoShapeColor
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.logoShapeColor}"/>
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
      </svg>`;
  }
}



// square
class Square {
  constructor(logoText, logoTextColor, logoShapeColor) {
    this.logoText = logoText
    this.logoTextColor = logoTextColor
    this.logoShapeColor = logoShapeColor
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="20" width="180" height="180" fill="${this.logoShapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
      </svg>`;
  }
}

module.exports = { Triangle, Circle, Square }