import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config.interface';

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
        type: 'asset/resource',
    // generator: {
    // filename: options.paths.assets.svg,
    // }
    };
    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    const cssSassLoader = buildCssLoader(options.isDev);
    // если не используем ts то нужен babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    // важен порядок, к пример babelLoader должен стоять до typescriptLoader
    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssSassLoader];
}
