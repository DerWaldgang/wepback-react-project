import path from "path";
import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config.interface";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // Абсолютные пути в приоритете
    // Внутри модуля относительная пути должны быть
    // А при экспорте из папки index - public api модуля должно экспортироваться что то конкретное
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      // "@": options.paths.src,
    }
  };
}
