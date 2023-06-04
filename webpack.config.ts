import webpack from "webpack"
import path from "path"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";



export default (env: BuildEnv): webpack.Configuration => {

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";

  return buildWebpackConfig({
    mode: mode,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      build: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
    isDev: isDev,
    port: port,
  });
};