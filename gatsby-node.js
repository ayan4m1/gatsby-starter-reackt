const { resolve } = require('path');

require('dotenv').config();

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': resolve(__dirname, 'src/components'),
        '~pages': resolve(__dirname, 'src/pages'),
        '~reducers': resolve(__dirname, 'src/reducers'),
        '~sagas': resolve(__dirname, 'src/sagas'),
        '~selectors': resolve(__dirname, 'src/selectors'),
        '~utils': resolve(__dirname, 'src/utils')
      }
    }
  });
};
