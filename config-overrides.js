const { addBabelPlugin, override, addLessLoader } = require('customize-cra');

const themeColors = {
  '@primary-color': '#face48',
  '@link-color': '#face48',
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
