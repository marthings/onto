var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
    bs.init({
        proxy: "0.0.0.0:3333",
        port: 6757
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("public/stylesheets/**/*.scss", bs.reload);
    gulp.watch("**/*.liquid").on('change', bs.reload);
});

gulp.task('default', ['browser-sync','watch']);
