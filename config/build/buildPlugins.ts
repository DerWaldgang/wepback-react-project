import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config.interface';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // чтобы использовать переменную где угодно в проекте наприме __IS_DEV__ в папке i18n
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        // чтобы wepback devserver сразу подхватывал изменения без обновления сайта
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
}
