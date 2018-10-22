const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
         // include: path.resolve(__dirname, './js'),
        // exclude: '/node_modules/',
        use: {
          loader: "babel-loader",
          options: { presets: ["env"] }
        }
      },
      {
        exclude: '/node_modules/',
        test: /\.sass$/,
        use:  [  'style-loader', 'css-loader', 'sass-loader']
      },
      {
        // exclude: '/node_modules/',
        test: /\.css$/,
        use:  [  'style-loader', 'css-loader']
      },
      {
        exclude: '/node_modules/',
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
	      	loader: 'file-loader',
	        options: {
	            name: '[name].[ext]',
	            outputPath: 'fonts/'
	        }
        }]
	   },
     {
       test: /\.(gif|png|jpe?g|svg)$/i,
       use: ['file-loader', 'image-webpack-loader']
      }
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     'url-loader?limit=10000',
      //     'img-loader'
      //   ]
      // }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    publicPath: '/',
  },
  plugins: [ 
   new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
   new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
   new webpack.HotModuleReplacementPlugin(),
   new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
  watch: true,
  mode: 'development'
}
