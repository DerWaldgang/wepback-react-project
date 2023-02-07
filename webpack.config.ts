import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config.interface';

export default (env: BuildEnv) => {
    // для webpack не нужно отдельно папки env если в webpack.config возвращать функцию то он принимает параметром по умолчанию env
    // env мы можем использовать в package.json scrips например как:

    // "start": "webpack serve --env port=3000",
    // "build:prod": "webpack --env mode=production",
    // "build:dev": "webpack --env mode=development"

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    return config;
};
