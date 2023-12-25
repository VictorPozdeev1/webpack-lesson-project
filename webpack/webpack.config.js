const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = ({ env }) =>
  merge(commonConfig, require(`./webpack.${env}.js`));
