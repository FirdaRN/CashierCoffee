const mix = require('laravel-mix');
// require('laravel-vue-lang/mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
// mix.webpackConfig({
//     resolve: {
//         alias: {
//             '@lang': path.resolve('./resources/cms-localization'),
//         },
//     },
//     module: {
//         rules: [
//             {
//                 test: /resources[\\\/]cms-localization.+\.(php)$/,
//                 loader: 'php-array-loader',
//             },
//         ],
//     },
//     });  