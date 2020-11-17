const HtmlWebpackPlugin = require('html-webpack-plugin');

const PLUGIN_NAME = 'HtmlWebpackDotnetVersionizePlugin';

class HtmlWebpackDotnetVersionizePlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(PLUGIN_NAME, (data, cb) => {
          const headTags = data.headTags.map(headTag => {
            const isStyle = headTag.tagName === 'link' && headTag.attributes.rel === 'stylesheet';
            if (isStyle) {
              headTag.attributes.href = `@("${headTag.attributes.href}".ToVersionizeSC())`;
            }
            return headTag;
          });
          
          const bodyTags = data.bodyTags.map(bodyTag => {
            const isScript = bodyTag.tagName === 'script';
            if (isScript) {
              bodyTag.attributes.src = `@("${bodyTag.attributes.src}".ToVersionizeSC())`;
            }
            return bodyTag;
          });
            
          data.headTags = headTags;
          data.bodyTags = bodyTags;
          cb(null, data);
      });
    });
  }
}

module.exports = HtmlWebpackDotnetVersionizePlugin;
