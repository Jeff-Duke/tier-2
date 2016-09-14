const path = require('path');

module.exports = {
  entry: {
    main: './lib/index.js',
    test: 'mocha!./test/index-test.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' },
      { test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};
