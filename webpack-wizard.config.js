const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = (webpackWizard, { resolveCwdPath }) => {
  const webpackConfig = webpackWizard({
    devPort: 8008,
    input: {
      favicon: resolveCwdPath('html/favicon.ico'),
      html: resolveCwdPath('html/index.html'),
      js: resolveCwdPath('src/index.js'),
      jsDev: resolveCwdPath('src/index-dev.js'),
      styles: [
        resolveCwdPath('src/styles')
      ],
      modules: [
        resolveCwdPath('src'),
        resolveCwdPath('src/modules')
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
