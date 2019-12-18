const { addBabelPlugin, override, addLessLoader } = require('customize-cra');

const themeColors = {
  '@primary-color': '#EA1D2C',
  '@link-color': '#EA1D2C',
};

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { ...themeColors },
  })
);
