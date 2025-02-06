//craco.config.js
const { ModuleFederationPlugin } = require('webpack').container;

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
            './Button2': './src/components/Button',
          },
          remotes: {
            main: 'main_app@http://localhost:3001/remoteEntry.js',
          },
          shared: {
            react: {
              singleton: true,
            },
            'react-dom': {
              singleton: true,
            },
            'react-redux': {
              singleton: true,
            },
            '@reduxjs/toolkit': {
              singleton: true,
            },
            '@mui/material': {
              singleton: true,
            },
          },
        }),
      ],
    },
  },
};
