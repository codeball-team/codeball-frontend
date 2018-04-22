const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = (webpackWizard, { resolveCwdPath }) => {
  const webpackConfig = webpackWizard({
    devPort: 8008,
    input: {
      favicon: resolveCwdPath('html/favicon.ico'),
      html: resolveCwdPath('html/index.html'),
      js: resolveCwdPath('src/js/index.js'),
      jsDev: resolveCwdPath('src/js/index-dev.js'),
      styles: [
        resolveCwdPath('src/js/styles')
      ],
      modules: [
        resolveCwdPath('src/js'),
        resolveCwdPath('src/js/modules')
      ]
    }
  });

  webpackConfig.node = {
    constants: false
  };

  if (process.env.ANALYZE_BUNDLE) {
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
  }

  webpackConfig.plugins.push(new webpack.ContextReplacementPlugin(
    /moment[\/\\]locale$/,
    /en|pl/
  ));

  return webpackConfig;
};
