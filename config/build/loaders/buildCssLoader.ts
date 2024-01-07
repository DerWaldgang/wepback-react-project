import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // этот плагин нужен чтобы в папке build была отдельная css папка для стилей, иначе стили буду попадать в js файл bundl'a
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        // name.module.scss чтобы поддерживал
        options: {
          modules: {
            // чтобы module работали только файлы где есть .module. , иначе стили так как index.scss не будут работать
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // чтобы в dev сборке можно было понять какой стил за что ответчает, иначе там в стилях hash будет что не удобно при разработке
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}
