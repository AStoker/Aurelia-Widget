import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';

export default function copyLibraries() {
  const files = [
      'node_modules/@webcomponents/webcomponentsjs/**/*',
      'node_modules/@webcomponents/shadycss/**/*',
  ];

  return gulp.src(files, {
      base: 'node_modules/@webcomponents'
  })
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('widget/libs/'));
}
