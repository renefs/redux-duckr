import path from 'path'
import webpack from 'webpack'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body',
})

const isProduction = process.env.NODE_ENV === 'production'
process.env.BABEL_ENV = isProduction ? 'production' : 'development'

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: PATHS.build,
    hot: true,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true }),
  ],
}

const config = {
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]' },

    ],
  },
  resolve: {
    root: path.resolve('./app'),
  },
  plugins: [new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  })],
}

export default Object.assign({}, config,
  isProduction === true ? productionConfig : developmentConfig
)
