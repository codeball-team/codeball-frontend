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
        resolveCwdPath('src/js')
      ]
    }
  });

  webpackConfig.node = {
    constants: false
  };

  return webpackConfig;
};
