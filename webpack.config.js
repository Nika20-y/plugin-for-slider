const path = require('path');
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts','.js']
    },
    output: {
        publicPath: 'dist',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')

    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {loader: MiniCssExtractPlugin.loader},
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap:true,
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap:true
                        }
                    }

        ]

    },
    ]},
    plugins: [
        new MiniCssExtractPlugin({
            filename: `bundle.css`
        }),
    ]
}
