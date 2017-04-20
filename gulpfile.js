var gulp = require("gulp"),
	sass = require("gulp-sass"),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

gulp.task("sass", function(){
	gulp.src("scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("css"))
});

//压缩css文件 合并css文件
gulp.task('css-concat', function() {
    gulp.src('scss/*.css')
        .pipe(concat('all.css')) //合并
        .pipe(cssmin()) //压缩
        .pipe(rename({ suffix: '.min' })) //命名
        .pipe(gulp.dest('dest'))
});

gulp.task("default", ["sass", "css-concat"]);