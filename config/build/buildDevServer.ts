import type {
  Configuration
  as
  DevServerConfiguration,
} from 'webpack-dev-server';
import { BuildOptions } from './types/config.interface';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  // порт на котором запускается webpack-dev-server (чтобы не приходилось каждый раз от
  // руки перезапускать после изменения чего либо)
  // open чтобы он сам открыл страницу в браузере с сервером, можно указать тут
  // в конфигурациях а можно в скрипте в package 'webpack server --open'
  return {
    port: options.port,
    open: true,
    // нужно чтобы запоминал свои роут, иначе если перейти на страницу /about с главной страницы все будет работать,
    // а потом обновить страницу то /about выдаст ошибку что нет такой страницы
    historyApiFallback: true,
    hot: true,
  };
}
