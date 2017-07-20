var path = require('path');
var webpack = require('webpack');

module.exports={
	entry:"./client",
	output:{
		filename:"bundle.js",
		path:__dirname+"/public",
		publicPath: '/'
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:"babel-loader",
				query:{
					presets:["react", "es2015"]
				}
			}
		]
	}
}