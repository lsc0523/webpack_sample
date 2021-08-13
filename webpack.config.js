const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output:{
        path: path.resolve('dist'),
        filename : '[name].js'
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
                options:{
                    publicPath: path.resolve('dist'),
                    name: '[name].[ext]?[hash]'
                }
            }

        ]
    }
    
}