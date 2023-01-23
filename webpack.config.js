const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },

            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //       outputPath: 'images',
            //     },
            // },

        ]
    },

    devServer: {
        port: 3000
    },
    
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
};
