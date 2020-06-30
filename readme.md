# From HTML to Webpack 4 : starter blog website

This is the starting point for the [webpack101](https://slides.com/imhotepp/webpack101/live) prezentation.

Steps to convert from no webpack to webpack4:
1. make sure you have node 10+ installed (use [nvm](https://github.com/nvm-sh/nvm) for easy install & switch from version to version).
2. Create an `src` folder and copy all existing files and folders inside, except the readme.md. Edit every `[filename].html` and remove or comment from head the stylesheets link:
```html
   <!-- <link rel="stylesheet" href="css/styles.css" /> -->
```
3. Install webpack dev server, webpack, webpack-cli
```
yarn add -D webpack webpack-cli webpack-dev-server
```
4. Update `package.json` as follows:
```js
 "scripts": {
        "dev": "webpack-dev-server --open --port 3030"
    },
```
5. Create `webpack.config.js` in the root folder and update it:
```js
const path = require("path");

module.exports = {


}
```

6. Create the file `./src/index.js` with content:
```js
import './css/styles.css'
```
7. Install modules css-loader and style-loader:
```
yarn add -D style-loader css-loader
```
and update the `webpack.config.js`:
```js
module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, // instead of style-loader
		 "css-loader"]
        }]
    },

```

8. Install plugins:
```
yarn add -D  copy-webpack-plugin  html-webpack-plugin mini-css-extract-plugin

```
9. Update `webpack.config.js` with the imports:

```js

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

```

and add the plugins after rules:
```js
 plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "src", "index.html")
        }),

        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, "src", "about.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-post.html',
            template: path.resolve(__dirname, "src", "blog-post.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: path.resolve(__dirname, "src", "contact.html")
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/img', to: 'img' },

            ],
        }),
  new MiniCssExtractPlugin(),

]
````
10. Create a folder and a file `./src/js/search.js` with the content:
```js
const search = async(ev) => {
    ev.preventDefault();
    alert('searching....');
}

export { search }

```
11. Edit `./src/index.js` and add the following lines:
```js
import { search } from './js/search'

export { search }
```

12. Update the `webpack.config.js` and add above rules the output:
```js
 output: {
        libraryTarget: 'var',
        library: 'client'
    },
```
13. Edit file `./src/index.html` and update the form tag as from:
```html
<form action="">
```
to
```html
<form action="" onsubmit="client.search(event)">
```
14. test the configurations buy running:
```cmd
yarn dev
```
It should start the webside with the files bundled through webpack and search function available.



Happy coding,

[@Imhotepp](https://twitter.com/imhotepp)
