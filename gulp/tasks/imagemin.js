'use strict';
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () => {
  return gulp
    .src('./src/assets/images/**/*')
    .pipe(
      imagemin([
        (imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: false, removeDimensions: true }],
        })),
      ])
    )
    .pipe(gulp.dest('./dist/assets/images'));
});
