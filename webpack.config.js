module.exports = {
  entry: './src/react-gif.js',
  output: {
    filename: './dist/react-gif.js',
    sourceMapFilename: './dist/react-gif.map',
    libraryTarget: 'umd',
    library: 'ReactGif'
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  }
};
