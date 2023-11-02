# Logo Generator - Module 10 Challenge
## Description

This logo generator was designed to be a quick-use application in node to create an SVG file based on inputs by the user. The
user has the choice of 3 characters of text to be tranposed on a shape (circle, triangle, square) of their choice and the user
can choose the color of both the shape and the text using color keywords (Black, #000000). This project is helpful in creating
quick logos for businesses to use either on sites or documents. It helps a user create something quickly and efficiently using
only 4 prompts.

I learned a lot doing this assignment and a lot of research/troubleshooting was involved to make this app operational. I learned 
a lot more about node operations, npm installation and use, and how you can link several javcascript files together by exporting/importing 
functions and variables which allows you to organize apps ina meaningful way, making them easier to edit in the future.

## Installation

To use this app in it entirety, the user needs open VSCode and download Inquirer and Jest by opening the terminal and entering "npm i inquirer"
and "npm i jest"

## Usage

To use this app, after downloading the necessary files, the user opens the terminal and executes the app by using "node index.js" to which the 
user will then be supplied a series of prompts for text, shape, text color, and shape color to render an SVG file. You can use both color keywords
and hexidecimal codes to render the SVG to your choosing.

## Credits

There were no source files for this assignment. 
https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation was used for the code necessary to plug in
color keywords and hexidecimal in the node terminal.

## License

There is no license for this project.

## Link:

[Video of Operation](https://drive.google.com/file/d/1yO9cb73mC-Qt_hgeEHP7Q6y2lOUmA280/view)

## Screenshot of Terminal and Generated README

![RenderedSVG](SVG.png)

## Tests

To run the tests already coded for this project, the user needs to download jest and run "npm test" which checks if the shape color plugged in will return
a true response.
