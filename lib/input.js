const inquirer = require('inquirer');
const {Triangle, Circle, Square, renderSVG} = require('./shapes')

const validColor = (input) => {
    const colorInputs = /^#([A-F0-9]{6}|[A-F0-9]{3})$|^(red|yellow|green|blue|purple|black|white|gray|cyan|magenta)$/i;

    if (colorInputs.test(input)) {
        return true; 
    } else {
        return 'Please enter a valid color or hex code.'; 
    }
};

const init = () => {
    inquirer
      .prompt([
          {
              type: 'input',
              name: 'text',
              message: 'Enter the text for your logo. (Max of 3 Characters)',
              validate: input => input.length <= 3 ? true : 'Please enter only up to 3 characters.',
            },
          {
              type: 'input',
              name: 'textColor',
              message: 'What color would you like the font to be? Type in color or Hex code:',
              validate: validColor,
            },
          {
              type: 'list',
              name: 'shapes',
              message: 'Choose a Shape:',
              choices: ['Triangle', 'Circle', 'Square'],
            },
          {
             type: 'input',
             name: 'shapeColor',
             message: 'What color would you like your shape to be? Type in color or Hex code:',
             validate: validColor,
            },  
        ])
          .then((answers) => {
            renderSVG(answers);
          })
          .catch((error => {
            console.error('There was an error rendering SVG', error);
          }))
    };

    init();
    module.exports = {init};