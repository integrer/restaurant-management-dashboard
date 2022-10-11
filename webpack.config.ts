import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import cssnano from 'cssnano';

// noinspection ES6PreferShortImport
import { IS_DEV } from './src/config';
// noinspection ES6PreferShortImport
import { WEBPACK_PORT, VERSION } from './src/config/server';

const plugins = [
  new CopyPlugin({ patterns: [{ from: path.resolve(__dirname, 'assets'), to: 'assets' }] }),
  new HtmlWebpackPlugin({
    template: './views/main.ejs',
    title: 'Restaurant management dashboard',
    templateParameters: { version: VERSION },
    minify: { removeComments: false },
  }),
  // new BundleAnalyzerPlugin(),
];

const targets = IS_DEV ? 'last 2 Firefox versions, last 2 Chrome versions, last 2 Edge versions' : '> 0.25%, not dead';

const config: Configuration = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV && 'inline-source-map',
  entry: ['./src/main'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name]-[chunkhash]-bundle.js`,
    chunkFilename: '[name]-[chunkhash]-bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    minimize: !IS_DEV,
    // splitChunks: {
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //       priority: 10,
    //     },
    //     material: {
    //       test: /[\\/]node_modules[\\/]@mui[\\/]/,
    //       name: 'material-ui',
    //       chunks: 'all',
    //       priority: 20,
    //     },
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/env', { modules: false, targets }], '@babel/react', '@babel/typescript'],
            plugins: [
              '@babel/plugin-transform-runtime',
              ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: { exportLocalsConvention: 'camelCase' },
              sourceMap: IS_DEV,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: IS_DEV,
              postcssOptions: { plugins: !IS_DEV ? [cssnano()] : [] },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|woff2|ttf|eot)$/,
        use: 'url-loader?limit=10000',
      },
    ],
  },
  ...(IS_DEV ? { devServer: { port: WEBPACK_PORT, open: false, client: { progress: true } } } : null),
  plugins,
};

export default config;
