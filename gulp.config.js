/*global module*/
module.exports = function () {
  'use strict';

  var config = {
    js: [
      './src/**/*js',
      './*.js'
		],
    scss: 'src/styles/styles.scss'
  };

  return config;
};
