var gulp = require('gulp');
var concatcss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var uncss = require('gulp-uncss');
var gzip = require('gulp-gzip');
var clean = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');

//  Remove unused CSS selectors from site.css
gulp.task('clean-css', function(){
  return gulp.src('build/stylesheets/site.css')
    .pipe(uncss({
      html: ['build/index.html', 'build/about.html', 'build/case-studies/**/*.html']
    }))
    .pipe(gulp.dest('build/stylesheets/'));
});

//  Concatenate stylesheets -> site.css
gulp.task('concat-css', function (){
  return gulp.src('source/stylesheets/*.css')
    .pipe(concatcss("stylesheets/site.css"))
    .pipe(gulp.dest('build/'));
});

//  Minify stylesheets
gulp.task('minify-css', function (){
  gulp.src('build/stylesheets/site.css')
    .pipe(cssmin())
    .pipe(gulp.dest('build/stylesheets/'));
});

// Gzip stylesheets
gulp.task('compress-css', function(){
  gulp.src('build/stylesheets/site.css')
	.pipe(gzip())
	.pipe(gulp.dest('build/stylesheets/'));
});

//  Ignore normalize.css
gulp.task('ignore-css', function (){
  return gulp.src('build/stylesheets/normalize.css', {read: false})
    .pipe(clean());
});

//  Minify html
gulp.task('minify-html', function(){
  return gulp.src('build/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'));
});

//  Gzip html
gulp.task('compress-html', function(){
  gulp.src('build/**/*.html')
  .pipe(gzip())
  .pipe(gulp.dest('build/'))
});

//  Minify javascripts
gulp.task('minify-js', function(){
  gulp.src('build/javascripts/site.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/javascripts/'))
});

//  Gzip javascripts
gulp.task('compress-js', function(){
  gulp.src('build/javascripts/site.js')
  .pipe(gzip())
  .pipe(gulp.dest('build/javascripts/'))
});

//  Compress images
gulp.task('compress-images', function (){
  gulp.src('build/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images/'));
});

// Run tasks in order
gulp.task('sequence', function(callback){
  runSequence('clean-css', 'concat-css', 'minify-css', 'compress-css', 'ignore-css', 'minify-html', 'compress-html', 'minify-js', 'compress-js', 'compress-images');
});

// Build
gulp.task('build', ['sequence']);
