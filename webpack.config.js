const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [ '@wordpress/default' ]
                }
            }
        ]
    },
    mode: 'development'
}