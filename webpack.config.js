// import path from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// export default {
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'frontend'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    static: { directory: path.join(__dirname) },
    port: 3000,
    client: {
      overlay: true,
      progress: true,
    },
    headers: {
      'X-Developer': 'Emad Armoun (EmIT)',
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?/,
        exclude: /node_modules/,
        loader:'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
