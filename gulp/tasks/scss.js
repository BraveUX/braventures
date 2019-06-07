'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const $ = plugins();
const config = require('../config');
const when = require('gulp-if');
// Check if gulp scripts --prod or --production has been added to the task
const argv = require('yargs').argv;
const production = argv.prod || argv.production;

const destination = `${config.distFolder}/assets/stylesheets`;

gulp.task('scss', () => {
  return (
    gulp
      .src('./src/styles/main.scss')
      .pipe(
        $.sass({
          includePaths: config.scssIncludes
        })
      )
      .on('error', $.notify.onError('Error: <%= error.message %>'))
      .pipe(when(!production, $.sourcemaps.init()))
      .pipe($.autoprefixer())
      .pipe(when(!production, $.sourcemaps.write('./')))
      .pipe(gulp.dest(destination))

      // Production
      .pipe(when(production, $.rename({ suffix: '.min' })))
      .pipe(
        when(
          production,
          $.uncss({
            html: config.uncssHtml,
            ignore: config.uncssIgnore
          })
        )
      )
      .on('error', $.notify.onError('Error: <%= error.message %>'))
      .pipe(when(production, $.cssnano()))
      .pipe(when(production, gulp.dest(destination)))

      // Finally make it uber small with gzip
      .pipe(when(production, $.gzip()))
      .pipe(when(production, gulp.dest(destination)))
  );
});
