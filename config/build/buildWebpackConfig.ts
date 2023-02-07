import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config.interface";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev } = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
          filename: "[name].[contenthash].js",
          path: paths.build,
          clean: true,
          assetModuleFilename: 'assets/[hash][ext]'
        },
        // Чтобы на production в bundle не попадали sourceMappingURL
        devtool: isDev ? 'inline-source-map' : undefined,
       // На production нам не нужен devServer
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
      };
}