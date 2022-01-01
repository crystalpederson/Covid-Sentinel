# Covid-Sentinel

## Project Status
In development

## Instalation and setup options
Clone down this repository. You will need `git`, `node` and `npm` installed globally on your machine.

### Installation
`npm install`

### Bundle assets
`npm run build`

### Bundle assets and watch for changes
`npm run build:dev`
After this command you can open the project by opening or running on a live server the `index.html` file under the `build` folder.
### Run webpack dev server
`npm run build:server`

### CSS Configuration
`./src/stylesheets/styles.css` Template CSS styles file added for Tailwind CSS. Contains the Tailwind directives.

`./tailwind.config.js` Default Tailwind configuration file. See https://tailwindcss.com/docs/configuration.

`./postcss.config.js` PostCSS configuration file. Requires `autoprefixer`, `postcss-nested` and `tailwindcss`.

`npm run build:css` This command reads the `tailwind.config.js` file and `styles.css` template file, transpiles the CSS and exports a `styles.css` file to the `build` folder.
