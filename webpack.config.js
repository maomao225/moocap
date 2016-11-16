var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        index: './src/index.js',
        course: './src/course.js',
        exam: './src/exam.js',
        member: './src/member.js',
        problems: './src/problems.js',
        mycenter: './src/mycenter.js',
        announcement: './src/announcement.js',
        error: './src/error.js'
    },
    output: {
        path: './static',
        publicPath: '/static/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=10000'
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: require.resolve('jquery'),
            loader: 'expose?jQuery!expose?$'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    // devtool: '#source-map',
    resolve: {
        alias: {
            'style': path.resolve(__dirname, './src/style'),
            'module': path.resolve(__dirname, './src/module'),
            'libs': path.resolve(__dirname, './src/libs'),
            'layout': path.resolve(__dirname, './src/layout')
        },
        fallback: path.resolve(__dirname, './src/util')
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')]
    }
}
