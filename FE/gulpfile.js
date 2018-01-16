const gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var angularFilesort = require('gulp-angular-filesort'), inject = require('gulp-inject');
var webserver = require('gulp-webserver');



gulp.task('angular', function () {

    var angularFiles = gulp.src(['./app/**/*.js']).pipe(angularFilesort());
    var angularOptions ={name: 'angular'};

    gulp.src('./index.html')
        .pipe(inject(angularFiles,angularOptions))
        .pipe(gulp.dest('./'));

});


gulp.task('bower', function () {

    var bowerFiles = gulp.src(mainBowerFiles(), {read: false});
    var bowerOptions = {name: 'bower'};

    gulp.src('./index.html')
        .pipe(inject(bowerFiles,bowerOptions))
        .pipe(gulp.dest('./'));

});


gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            host: "localhost",
            port: "3352",
            directoryListing: false,
            directoryListing: true,
            open: './index.html'
        }));
});
