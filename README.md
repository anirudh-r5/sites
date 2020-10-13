# Sites
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-resentment.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)

A group of websites to be scraped using `web-scraper`.

This project is built using NodeJS with the following modules:
- [ExpressJS](https://expressjs.com/) as the backend and web-server.
- [StandardJS](https://standardjs.com/) for linting and formatting (use the [StandardJS extension](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs) for VS Code to activate it).
- [Bulma](https://bulma.io) CSS framework for designing the webpages.
- [npm-run-all](https://npmjs.com/package/npm-run-all) to run multiple scripts easily.
- [node-sass](https://www.npmjs.com/package/node-sass) to convert Bulma SCSS files to CSS.

## Installation
- Install `git` and NodeJS.
- Pull the project using git or download the zip and extract it to your workspace.
- Run the `npm install` command to install all the modules on your PC.
- Run `npm start` command to start up the server.
- Go to [localhost:3000](http://localhost:3000) on your browser to access the sites.

## Folder Structure
- The entry point to the app is `index.js`. It also acts as the router and serves all the pages.
- The `public` folder contains folders for each webpage along with their respective CSS and Javascript files.
- All the CSS files import the Bulma CSS files. Any other webpage specific formatting are to be done in their respective CSS files.
- The `public/lib` folder contains CSS and JS files which are commonly used for all the webpages. The Bulma CSS file will be automatically compiled to this folder (see below).
- The `sass` folder contains the main Bulma SCSS file which is compiled into CSS by `node-sass` and placed in [/public/lib](public/lib) which is then imported into each webpage by their respective CSS files.
- The main theme for all the pages are to be customized only in the `style.scss` file in the `sass` folder (Refer to the Bulma CSS documentation on how to do this).
