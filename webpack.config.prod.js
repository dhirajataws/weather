var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path              = require('path');
   // webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var PATHS = {
    app  : __dirname + '/app',
    build: __dirname + '/build'
};

module.exports ={
    entry:"./app/app.js",
    output: {
        path    : PATHS.build,
        filename:"public/bundle.js"
    },
    devServer: {
        inline: true,
        port: 8090
    },
    module:{
   loaders :[
       {
           test:/\.jsx?$/,
           exclude: /(node_modules|bower_components)/,
           loader:'babel-loader',
           query:{
               presets: ['react','es2015']
           }
       },
       {
           test: /\.scss$/,
           loader: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use     : 'css-loader!sass-loader'
           })
       }
   ]
    },
    plugins: [
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin( {
            filename:'public/style.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATHS.app + '/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            comments: false,
        })
    ]
}