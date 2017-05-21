# Website Performance Optimization portfolio project
Author: Rick

Jump to [What's new in 1.1.1?](#changelog)

**Live Demo**: https://hstdesigns.github.io/frontend-nanodegree-mobile-portfolio/dist

**Project Submission:**
You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [List of Grunt Packages](#list-of-grunt-packages)
- [Useful Tools and Resources](#useful-tools-and-resources)
- [Changelog](#changelog)

## Features
- consistent frame-rate at **60fps** when scrolling
- *index.html* achieves a PageSpeed score of 100 for mobile user experience :) (with `ngrok -c` | compression mode)
- *index.html* achieves a PageSpeed score of 97 for desktop user experience (with `ngrok -c` | compression mode)
- time to resize pizzas is less than 5 ms on the *views/pizza.html* page

## Prerequisites
- [Node.js 6.1+](http://nodejs.org) (Download the latest LTS version)
- [NPM](https://www.npmjs.com/) package manager for JavaScript
- [Grunt](https://gruntjs.com/) JavaScript Task Runner
- [Git](https://git-scm.com/downloads) is a free and open source distributed version control system
- Command Line Tools

## Getting Started
The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/hstdesigns/frontend-nanodegree-mobile-portfolio.git

# Change directory
cd frontend-nanodegree-mobile-portfolio

# Install NPM dependencies
npm install

# Build dist environment
grunt build

# Start the webserver
npm start
```
**Note:** The *dist* folder will recreated if you run `grunt build`.

Now, open your browser and enjoy :)
http://127.0.0.1:8100

### Test the locally website with Google PageSpeed
Download and install [ngrok](https://ngrok.com/).
**Note:** Ngrok creates a public HTTPS URL for a web site running locally on your development machine.

```bash
# Open a new terminal window and type
ngrok http 8100
```

Open the new generate https url in your browser.
For example:
https://d67a1234.ngrok.io
Use this url for Google PageSpeed Insights (https://developers.google.com/speed/pagespeed/insights/).

## Project Structure
| Name                                  | Description                                                   |
| ------------------------------------- | ------------------------------------------------------------- |
| **dist**/*.*                          | Static assets (html, css, js, img) **minified version**       |
| **src**/                              | Static assets (html, css, js, img)                            |
| **src/js**/*.js                       | perfmatters.js to measure the Critical Rendering Path         |
| **src/css**/*.css                     | Main stylesheets portfolio                                    |
| **src/img**/*.{gif,jpg,png}           | with grunt optimized and renamed images                       |
| **src/img/org**/*.{gif,jpg,png}       | original images without optimization and resizing             |
| **src/views**/                        | Static assets (html, css, js, img)                            |
| **src/views/js**/*.js                 | Main.js the pizza 60fps project engine                        |
| **src/views/css**/*.css               | Main stylesheets pizza site                                   |
| **src/views/img**/*.{gif,jpg,png}     | With grunt optimized and renamed images                       |
| **src/views/img/org**/*.{gif,jpg,png} | Original images without optimization and resizing             |
| .gitignore                            | Exclude the node_modules folder                               |
| gruntfile.js                          | The Gruntfile                                                 |
| package.json                          | NPM dependencies                                              |

**Note:** The *dist* folder will recreated if you run `grunt build`.

## List of Grunt Packages
| Package                   | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| grunt-contrib-copy        | copy src --> dist                                                 |
| grunt-responsive-images   | resize and rename images                                          |
| grunt-contrib-clean       | remove files and subfolders                                       |
| grunt-mkdir               | create new directories                                            |
| grunt-contrib-uglify      | minify *.js files                                                 |
| grunt-contrib-jshint      | test JavaScript syntax                                            |
| grunt-contrib-cssmin      | minify *.css files                                                |
| grunt-contrib-htmlmin     | minify *.html files                                               |
| grunt-contrib-imagemin    | optimization and lossy compression to shrink JPEG and PNG images  |

## Useful Tools and Resources
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) - You can identify ways to make your site faster and more mobile-friendly.
- [DILLINGER](http://dillinger.io/) - Dillinger is an online cloud-enabled, HTML5, buzzword-filled Markdown editor.

## Changelog

### 1.1.1 (May 21, 2017)
- fixed the views/js/main.js file to improve the resize and scrolling performance

### 1.1.0 (May 21, 2017)
- Final release
- increase the pizza scrolling performance
    - added the requestAnimationFrame() funtion
    - created a pizzaItems variable to decrease the document function calls
-  *index.html* critical rendering path performance improvements
    - added the JavaScript and CSS resources just before the closing body tag
    - added the `async` attribute to the *js/perfmatters.js* script tag
    - added the `media="print"` attribute to the *css/print.css* link tag

### 1.0.0 (February 8, 2017)
- Initial version
- Added NPM Package Manager
- Added Grunt
- Added *node_modules* to *.gitignore*
