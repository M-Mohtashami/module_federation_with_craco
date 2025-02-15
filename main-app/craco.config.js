//craco.config.js
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = {
  devServer: {
    port: 3001,
  },
  webpack: {
    configure: {
      output: {
        publicPath: 'http://localhost:3001/',
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'main_app',
          filename: 'remoteEntry.js',
          exposes: {
            './components': './src/components',
            './themeOptions': './src/theme',
            './counter1': './src/redux/slices/counter',
          },
          remotes: {
            tasks: 'tasks@http://localhost:3002/remoteEntry.js',
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              eager: false,
              requiredVersion: deps.react,
            },
            'react-dom': {
              singleton: true,
              eager: false,
              requiredVersion: deps['react-dom'],
            },
            'react-redux': {
              singleton: true,
              eager: false,
              requiredVersion: deps['react-redux'],
            },
            '@reduxjs/toolkit': {
              singleton: true,
              eager: false,
              requiredVersion: deps['@reduxjs/toolkit'],
            },
            '@mui/material': {
              singleton: true,
              eager: false,
              requiredVersion: deps['@mui/material'],
            },
          },
        }),
      ],
    },
  },
};
