import gulp from 'gulp';
import sourceMaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import path from 'path';
import del from 'del';
import mocha from 'gulp-mocha';
import eslint from 'gulp-eslint';

const paths = {
  es6Path: './src/**/*.*',
  es6: ['./src/**/*.js', '!./src/**/*.json'],
  es5: './dist',
  tests: ['test/**/*.js'],
  other: ['gulpfile.babel.js'],
  // Must be absolute or relative to source map
  sourceRoot: path.join(__dirname, 'src'),
};

gulp.task('clean:dist', () => {
  return del([
    './dist/**/*',
  ]);
});

gulp.task('build', ['clean:dist', 'copy:nonJs'], () => {
  return gulp.src(paths.es6)
    .pipe(sourceMaps.init())
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(sourceMaps.write('.', {sourceRoot: paths.sourceRoot}))
    .pipe(gulp.dest(paths.es5));
});

// Copy all the non JavaScript files to the ./dist folder
gulp.task('copy:nonJs', () => {
  return gulp.src([paths.es6Path, `!${paths.es6}`])
    .pipe(gulp.dest(paths.es5));
});

gulp.task('watch', ['build'], () => {
  gulp.watch(paths.es6, ['build']);
});

gulp.task('test', () => {
  gulp.src(paths.tests, {read: false})
    .pipe(mocha({reporter: 'nyan', exit: true}));
});

gulp.task('lint', ['lint:src', 'lint:test', 'lint:other']);

gulp.task('lint:src', () => {
  return gulp.src(paths.es6)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:test', () => {
  return gulp.src(paths.tests)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:other', () => {
  return gulp.src(paths.other)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['watch']);
