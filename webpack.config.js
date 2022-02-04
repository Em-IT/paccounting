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
    // alias: {
    //   '~': path.resolve(__dirname, './node_modules'),
    //   // '~': path.resolve('./node_modules'),
    // },
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
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, './node_modules'),
        // include: path.resolve(__dirname, './node_modules/react-toastify/dist/ReactToastify.css'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
