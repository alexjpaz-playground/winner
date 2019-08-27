const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src",
  },
  output: {
    library: "Winner",
    libraryTarget: "umd"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "And the winner is ..."
    }),
    new CopyPlugin([
      { from: 'sounds', to : 'sounds' }
    ])
  ]
};
