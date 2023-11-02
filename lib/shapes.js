class Triangle {
  constructor(logoText, logoTextColor, logoShapeColor) {
    this.logoText = logoText
    this.logoTextColor = logoTextColor
    this.logoShapeColor = logoShapeColor
  }
  render() {
    return `
      <svg
      version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.logoShapeColor}"/>
      <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
      </svg>


    `;
  }
}

module.exports = {
  Triangle,

}