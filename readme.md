# From HTML to Webpack 4 : starter blog website

This is the development and production configuration ready for the [webpack101](https://slides.com/imhotepp/webpack101/live) prezentation.

Take a look at the `webpack.prod.js` and `package.json` for details.

To run this version of the webpack transformation use the following commands once you have node 10+ available:

1. Install dependencies
```cmd
yarn
```
2. start the dev server:

```cmd
yarn build-prod
```

3. Use `lite-server` or `http-server` to run the `dist` folder.

```cmd
cd dist
lite-server 
````

<br/>

Check the sources in the browser to see that the `html`, `css` and `js` files are also changed.

It should start the webside with the files bundled through webpack and ready for Production.

<br>

Happy coding,

[@Imhotepp](https://twitter.com/imhotepp)