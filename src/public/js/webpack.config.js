const path = require('path'); // eslint-disable-line

module.exports = {
    mode: 'development',
    entry: {
        index: './src/public/js/pages/index.ts',
        'input-detailed': './src/public/js/pages/input-detailed.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './pages'),
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
                ],
            },
        ],
    },
}