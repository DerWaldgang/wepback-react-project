import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config.interface";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  // Порядок в лоадерах имеет значение
  // Если не используем typescript - то нужен был бы еще babel-loader под jsx

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true,
                    },
                ],
            ],
        },
    },
};
  // const fileLoader = {
  //   test: /\.(png|jpe?g|gif|woff2|woff)$/i,
  //   use: [
  //     {
  //       loader: "file-loader",
  //     },
  //   ],
  // };
  // const svgLoader = {
  //   test: /\.svg$/,
  //   use: ["@svgr/webpack"],
  // };

  // webpack 5 svg и file loaderы deprecated - лучше использовать через assets/resource
  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    type: "asset/resource",
    // generator: {
    // filename: options.paths.assets.svg,
    // }
  };
  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };
  const cssSassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // этот плагин нужен чтобы в папке build была отдельная css папка для стилей, иначе стили буду попадать в js файл bundl'a
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        // name.module.scss чтобы поддерживал
        options: {
          modules: {
            // чтобы module работали только файлы где есть .module. , иначе стили так как index.scss не будут работать
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            // чтобы в dev сборке можно было понять какой стил за что ответчает, иначе там в стилях hash будет что не удобно при разработке
            localIdentName: options.isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  // если не используем ts то нужен babel
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  // важен порядок, к пример babelLoader должен стоять до typescriptLoader
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssSassLoader];
}
