//craco.config.js
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = {
  devServer: {
    port: 3002,
  },
  webpack: {
    configure: {
      output: {
        publicPath: 'http://localhost:3002/',
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'tasks',
          filename: 'remoteEntry.js',
          exposes: {
            './components': './src/components',
            './counter2': './src/redux/slices/counter',
            './tasksReducer': './src/redux/slices/tasks',
          },
          remotes: {
            main: 'main_app@http://localhost:3001/remoteEntry.js',
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
