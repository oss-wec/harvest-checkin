# harvest

> data entry form for hunter checkins

## Dev Setup

First install the following software for development.

* [GitHub for Windows](https://desktop.github.com/)
* [Visual Studio Code (or Atom Text Editor)](https://code.visualstudio.com/)
* [NodeJS (Windows Installer 64-bit)](https://nodejs.org/en/download/)


### GitHub for Windows 

This is a desktop Git and GitHub application that will help discover and contribute to all the coding projects that are available for us to work on. By default cloned and new repos will be in `C:/Documents/GitHub`.

### Visual Studio Code

This is a text editor, but better. There is syntax highlighting, code snippets, theming and customization. It includes version control, so that changes can be pushed to remote repos on the easily. It also lints code, which cuts down on syntax errors and forces code to a style guide. 

### NodeJS

NodeJS runs the world these days in modern web development. It is used to install front end packages, run dev servers locally, and on the server.

## Getting Started

Open GitHub for Windows then File>Clone Repository. Then start typing oss-wec/harvest to find this repo to clone. 

![github desktop](https://raw.githubusercontent.com/oss-wec/harvest-checkin/master/docs/img/github%20desktop.png)

Once the repo is cloned find it in the GitHub folder of you computer and open with VS Code.

## Running the Dev Server

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```