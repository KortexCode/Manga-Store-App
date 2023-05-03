const path = require("path"); //nos permite saber donde está ubicado este proyecto
//Si está en un servidor o computadora local
//PLUGINS
//Optimizar archivos al comprimirlos
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
//Minizar JS y Css
const TeserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")


module.exports = {
    entry: "./src/index.jsx", //punto de entrada del proyecto
    output: { //punto de salida del proyecto optimizado y terminado
        path: path.resolve(__dirname, "dist"),
        filename:"[name].[contenthash].js", //nombre del archivo optimizado(el index.js)
        publicPath:"./",//de manera manual esta es el "src" del js y css dentro del index.html
        assetModuleFilename:'assets/images/[hash][ext]',
    },
    mode:"production",
    devtool:"source-map",
    resolve: {//Con que extensiones va a trabajar webpack
        extensions:[".js", ".jsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@images": path.resolve(__dirname, "src/assets"),
            "@slices": path.resolve(__dirname, "src/slices"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
        }
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test:/\.html$/,
                use: {
                    loader: "html-loader", 
                }
            },
            {
                test:/\.(css|scss)$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader" ],  
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                type:"asset/resource",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename:"index.html",
                title: "PokeRedux",
                inject: true,
                template: "./public/index.html"
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename:"[name].[contenthash].css",
            }
        ),
        new CleanWebpackPlugin(), 
    ],
    optimization:{
        minimize: true,
        minimizer: [
            new TeserPlugin(),
            new CssMinimizerPlugin(),
        ]
    }
  
}