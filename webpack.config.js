const isDev = process.env.NODE_ENV === 'development'

let definePlugin
if (isDev) {
  definePlugin = new webpack.DefinePlugin({
    KEY_NAME: JSON.stringify("api-token398aseotuha.sch")
  })
}
else {
  definePlugin = new webpack.DefinePlugin({
    KEY_NAME: JSON.stringify("api-token398aseotuha.sch")
  })
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [definePlugin],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
