import { BuildOptions } from "./types/config";
import webpack, { ids } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildWebpackDevServer } from "./buildWebpackDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    devServer: isDev ? buildWebpackDevServer(options) : undefined,
    mode: mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
  };
}
