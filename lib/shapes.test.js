const {Triangle, Circle, Square} = require('./shapes')

describe('Triangle', () => {
  test('render() method should return with the correct shape color', () => {
    const text = 'Test';
    const textColor = 'yellow';
    const shapeColor = 'black';
    const triangle = new Triangle(text, textColor, shapeColor);
    const result = `<polygon points="150,50 100,150 200,150" style="fill:${shapeColor}" />`;
    expect(triangle.render()).toBe(result);
  });
});

describe('Square', () => {
    test('render() method should return with the correct shape color', () => {
      const text = 'Test';
      const textColor = 'yellow';
      const shapeColor = 'black';
      const square = new Square(text, textColor, shapeColor);
      const result = `<rect x="100" y="50" width="100" height="100" style="fill:${shapeColor}" />`;
      expect(square.render()).toBe(result);
    });
  });

  describe('Circle', () => {
    test('render() method should return with the correct shape color', () => {
      const text = 'Test';
      const textColor = 'yellow';
      const shapeColor = 'black';
      const circle = new Circle(text, textColor, shapeColor);
      const result = `<circle cx="150" cy="100" r="50" style="fill:${shapeColor}" />`;
      expect(circle.render()).toBe(result);
    });
  });