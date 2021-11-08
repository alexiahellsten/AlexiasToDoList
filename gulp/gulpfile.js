var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task("compile", function () {
    return gulp.src("scss/main.scss").pipe(sass()).pipe(gulp.dest("css"));
});

gulp.task("watch-scss", function () {
    gulp.watch("scss/main.scss", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile", "watch-scss"), function () {});

gulp.task('minify-css', function() {
    return gulp.src('css/dist/dist.css')
        .pipe(cleanCSS())
        .pipe(rename('dist.min.css'))
        .pipe(gulp.dest('css/dist'));
});

gulp.task('watch', function(){
  gulp.watch('css/dist/**/*.css', ['minify-css']); 
});

gulp.task('default', ['minify-css', 'watch']);