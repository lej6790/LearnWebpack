var path = require('path');
var MinCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[{ loader: MinCssExtractPlugin.loader }, 
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MinCssExtractPlugin()
  ]
}