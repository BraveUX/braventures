const gulp = require('gulp');
const { argv } = require('yargs');
const webpack = require('webpack-stream');

// Check if gulp scripts --prod or --production has been added to the task
const PRODUCTION = argv.prod || argv.production;

gulp.task('scripts', () =>
  gulp
    .src('./src/scripts/main.js')
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [],
                },
              },
            },
          ],
        },
        mode: PRODUCTION ? 'production' : 'development',
        devtool: !PRODUCTION ? 'inline-source-map' : false,
        output: {
          filename: 'bundle.js',
        },
      })
    )
    .pipe(gulp.dest('./dist/assets/js/'))
);
