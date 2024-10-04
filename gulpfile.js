// gulpfile.js

const gulp = require('gulp');
const sass = require('gulp-dart-sass'); // Use gulp-dart-sass instead

// Sass compilation task
gulp.task('sass', function() {
    return gulp.src('./app.scss') // Source file
        .pipe(sass().on('error', sass.logError)) // Compile Sass and log errors
        .pipe(gulp.dest('./css')); // Destination for compiled CSS
});

// Default task
gulp.task('default', gulp.series('sass'));