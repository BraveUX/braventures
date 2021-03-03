'use strict';
const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

gulp.task('svg', () => {
  return gulp
    .src('./src/svg/*.svg')
    .pipe(
      svgmin({
        plugins: [
          {
            removeStyleElement: false,
          },
          {
            // removeAttrs: {
            //   attrs: ['fill', 'stroke', 'fill.*', 'stroke.*']
            // }
          },
        ],
      })
    )
    .pipe(gulp.dest(`./dist/assets/svg`));
});

gulp.task('svg:inline', () => {
  return gulp
    .src('./src/svg/inline/*.svg')
    .pipe(
      svgmin({
        plugins: [
          {
            removeStyleElement: true,
          },
        ],
      })
    )
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(gulp.dest('./src/views/layouts/includes'));
});

gulp.task('svg:external', () => {
  return gulp
    .src('./src/svg/external/*.svg')
    .pipe(
      svgmin({
        plugins: [
          {
            removeStyleElement: false,
          },
        ],
        // Uncomment below for pretty SVG output
        // ,js2svg: {
        //   pretty: true
        // }
      })
    )
    .pipe(gulp.dest(`./dist/assets/svg`));
});

gulp.task('svg', gulp.parallel('svg', 'svg:inline', 'svg:external'));
