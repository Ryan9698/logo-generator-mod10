const fs = require('fs');


class Shape {
    constructor(text, textColor, shapeColor, shape){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    };
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor, 'Triangle');
    };

    getSVG() {
        return `<polygon points="150,50 100,150 200,150" style="fill:${this.shapeColor}" />`;
    }
};

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor, 'Circle');
    };

    getSVG() {
        return `<circle cx="150" cy="100" r="50" style="fill:${this.shapeColor}" />`;
    }
};

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor,'Square');
    };
    
    getSVG() {
        return `<rect x="100" y="50" width="100" height="100" style="fill:${this.shapeColor}" />`;
    }

};

const renderSVG = (data) => {
    const { text, textColor, shapes, shapeColor } = data;

    let shape;

    switch (shapes) {
        case 'Triangle':
            shape = new Triangle(text, textColor, shapeColor);
            break;
        case 'Circle':
            shape = new Circle(text, textColor, shapeColor);
            break;
        case 'Square':
            shape = new Square(text, textColor, shapeColor);
            break;
        default:
            break;
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">        
            ${shape.getSVG()}
            <text x="150" y="100" fill="${textColor}" font-size="30" text-anchor="middle" alignment-baseline="middle">${text}</text>
        </svg>
    `;

    const folderName = '../examples';
    const filePath = `${folderName}/logo.svg`;

    fs.writeFile(filePath, svgContent, 'utf-8', (err) => {
        if (err) {
            console.error('Error: Unable to write the SVG file', err);
        } else {
            console.log(`Generated logo.svg`);
        }
    });
};

module.exports = {Shape, Triangle, Circle, Square, renderSVG};