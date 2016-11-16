var path = require('path')
var webpack = require('webpack')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: require.resolve('jquery'),
            loader: 'expose?jQuery!expose?$'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
        // new ExtractTextPlugin('[name].css', {
        //     allChunks: true
        // })
    ],
    vue: {
        loaders: {
            css: 'style!css',
            sass: 'style!css!sass'
        },
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    },
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
