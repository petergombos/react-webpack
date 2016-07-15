module.exports = {
  context: `${__dirname}/src`,
  entry: {
    javascript: './js/index.js',
    html: './index.html',
  },
  output: {
    filename: './js/app.js',
    path: `${__dirname}/dist`,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]'],
      },
    ],
  },
};
