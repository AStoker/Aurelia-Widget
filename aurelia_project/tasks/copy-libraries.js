import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';

export default function copyLibraries() {
  const files = [
      'node_modules/@webcomponents/webcomponentsjs/**/*'
  ];

  return gulp.src(files)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('widget/webcomponentsjs'));
}
