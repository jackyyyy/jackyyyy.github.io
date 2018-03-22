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
// gulp.task('css-concat', function() {
//     gulp.src('scss/*.css')
//         .pipe(concat('all.css')) //合并
//         .pipe(cssmin()) //压缩
//         .pipe(rename({ suffix: '.min' })) //命名
//         .pipe(gulp.dest('css'))
// });

//t3css-min
gulp.task('t3cssmin', function(){
    gulp.src(['css/t3.css','css/circle.css','css/flower.css','css/loading.css','css/rotate_transform.css'])
        .pipe(concat('main_t3.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' })) //命名
        .pipe(gulp.dest('css'))
});

//index-min
gulp.task('indexmin', function(){
    gulp.src(['css/bootstrap-3.3.5.css','css/gooey.css','css/livedemo.css','css/index.css'])
        .pipe(concat('all_index.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('css'))
})

gulp.task("default", ["sass"]);