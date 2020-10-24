# Sites
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/0-percent-optimized.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)

A group of websites built to be scraped by a web-scraper.

This project is built using NodeJS with the following modules:
- [ExpressJS](https://expressjs.com/) as the back-end and router.
- [StandardJS](https://standardjs.com/) for linting and formatting (along with the [StandardJS extension](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs) in VS Code).
- [Bulma](https://bulma.io) CSS framework for designing the webpages.
- [npm-run-all](https://npmjs.com/package/npm-run-all) to run multiple scripts easily.
- [mongoose](https://mongoosejs.com/) for running MongoDB queries.
- [date-and-time](https://www.npmjs.com/package/date-and-time) for easier interfacing with Javascript date & time objects.
- [capitalize](https://www.npmjs.com/package/capitalize) for formatting MongoDB search queries

## Pre-requisites 
1. [Node.js](https://nodejs.org/en/)
1. [MongoDB](https://www.mongodb.com/)
1. [Git](https://git-scm.com/) (optional)
 
## Installation
- Pull the project using git or download the zip and extract it to your workspace.
- Run the `npm install` command to install all the dependencies.
- Run `npm start` command to start up the server.
- Go to [localhost:3000](http://localhost:3000) on your browser to access the sites.

## Folder Structure
- The entry point to the app is `index.js`. It acts as the router and interface to the MongoDB database.
- `/lib` contains helper functions for `index.js`
- The `/public` folder contains folders for each webpage along with their respective CSS and Javascript files.
- All the CSS files import the Bulma CSS files. Any other webpage specific formatting are to be done in their respective CSS files.
- The `/public/lib` folder contains CSS and JS files which are commonly used for all the webpages. The Bulma CSS file is loacted here for use in all the pages.
