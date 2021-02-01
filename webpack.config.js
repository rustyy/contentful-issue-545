const path = require('path');
const {config} = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

config();

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {},
    plugins: [
        new DefinePlugin({
            __SPACE_ID__: JSON.stringify(process.env.SPACE_ID),
            __ACCESS_TOKEN__: JSON.stringify(process.env.ACCESS_TOKEN),
            __EXAMPLE_ENTRY_ID__: JSON.stringify(process.env.EXAMPLE_ENTRY_ID)
        }),
        new HtmlWebpackPlugin(),
    ]
}
