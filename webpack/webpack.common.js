const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  devServer: {
    static: "./public2",
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      src2: path.resolve(__dirname, "../src"),
      img: path.resolve(__dirname, "../src/images"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["build"],
        },
        onEnd: {
          copy: [
            {
              source: "public2",
              destination: "build",
            },
          ],
        },
      },
    }),
  ],
};
