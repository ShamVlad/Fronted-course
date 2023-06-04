import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildPaths } from "./types/config";

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    
    return [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: paths.html
      }),
      new MiniCssExtractPlugin({
        filename: "Css/[name].[contenthash].css"
      })
    ];
}
