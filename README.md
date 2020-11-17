# Html Webpack Dotnet Versionize Plugin
_A plugin for webpack-html-plugin to add .net framework's ToVersionizeSC() method to the scripts and styles_

Useful when you create .cshtml file instead of .html file with html-webpack-plugin.

## Configuration

1. Install via `npm i -D html-webpack-dotnet-versionize-plugin` or `yarn add -D html-webpack-dotnet-versionize-plugin`
1. Add to your webpack config AFTER HtmlWebpackPlugin
```javascript
    const HtmlWebpackDotnetVersionizePlugin = require('html-webpack-dotnet-versionize-plugin');

    ...
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, 'Sample/Path/Views/Account/MyAccount.cshtml'),
            template: path.join(__dirname, 'Sample/Path/Templates/MyAccount.ejs'),
            minify: false,
        }),
        new HtmlWebpackDotnetVersionizePlugin()
    ]
```

## Sample Output
```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="@("/css/main.css".ToVersionizeSC())" rel="stylesheet"/>
  </head>
  <body>
  <script src="@("/js/main.js".ToVersionizeSC())"></script></body>
</html>
```

## Testing
I'm planning to write test in future. Currently you can test the plugin manually.
Install npm packages then run `npm run test:build`. You can see result in test/index.html file.
