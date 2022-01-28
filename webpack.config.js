const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExctractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry:  path.resolve(__dirname, 'src','js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.bundle.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets"),
                    to: "assets"
                }
            ]
        }),
        new MiniCssExctractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExctractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: ['file-loader']
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
}