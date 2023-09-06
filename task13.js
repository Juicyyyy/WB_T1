//Задача на классы и наследование: создайте базовый класс Shape (фигура), 
//который имеет методы для расчета площади и периметра. Затем создайте подклассы, 
//представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
//Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {

    constructor() {
        this.width = 0;
        this.height = 0;
        this.radius = 0;
        this.side1 = 0;
        this.side2 = 0;
        this.side3 = 0;
    }

    // Метод для расчета площади (в базовом классе не реализован)
    calculateArea() {
        throw new Error("Метод calculateArea должен быть переопределен в подклассах");
    }

    // Метод для расчета периметра (в базовом классе не реализован)
    calculatePerimeter() {
        throw new Error("Метод calculatePerimeter должен быть переопределен в подклассах");
    }
}

// Подкласс для прямоугольника
class Rectangle extends Shape {

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() { 
        return this.width * this.height;
    }

    getPerimeter() { 
        return 2 * (this.width + this.height);
    }
}

// Подкласс для круга
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() { 
        return 2 * Math.PI * this.radius;
    }
}

// Подкласс для треугольника
class Triangle extends Shape {

    constructor(side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() { 
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
    
}

let rectangle = new Rectangle(5, 6);

// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter());

let circle = new Circle(3);

// console.log(circle.getArea());
// console.log(circle.getPerimeter());

let triangle = new Triangle(2, 3, 4);

// console.log(triangle.getArea());
// console.log(triangle.getPerimeter());