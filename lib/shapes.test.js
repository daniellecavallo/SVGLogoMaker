const { Square, Triangle, Circle } = require("./shapes");

describe("triangle",() => { 
    test("should render svg for a blue triangle",() =>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
    
})

describe("square",() => {
    test("should render svg for a blue triangle",() =>{
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="blue"/>');
    })
})

describe("circle",() => {
    test("should render svg for a blue triangle",() =>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue" />');
    })
})

