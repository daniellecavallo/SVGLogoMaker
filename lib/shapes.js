class Shape {
    constructor() {
        this.color=""

    }
setColor(color) {
        this.color=color
}
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="200" height="200" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}"/>`
    }
}
module.exports={
    Circle,Triangle,Square
}