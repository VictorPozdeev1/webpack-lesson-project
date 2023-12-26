const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = ({ env }) => {
  
  // Не знаю, как тут через merge сделать, придётся так.
  if (env === "dev") {
    const babelLoaderNode = commonConfig.module.rules[0]?.use?.[0];
    if (babelLoaderNode)
      babelLoaderNode.options = {
        plugins: [require.resolve("react-refresh/babel")],
      };
  }

  return merge(commonConfig, require(`./webpack.${env}.js`));
};
