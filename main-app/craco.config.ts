//craco.config.js
const { ModuleFederationPlugin } = require('webpack').container;

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
            './Button': './src/components/Button',
            './themeOptions': './src/theme',
          },
          remotes: {
            tasks: 'tasks@http://localhost:3002/remoteEntry.js',
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
