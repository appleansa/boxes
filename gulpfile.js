'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    filter = require('gulp-filter'),
    browserSync = require('browser-sync'),
    svgSprite = require('gulp-svg-sprite'),
    reload = browserSync.reload;



var path = {

build: {
    html: 'build/',
    css: 'build/css',
    js: 'build/js',
    fonts:'build/fonts/'
    
},
     
    src: {
        html: 'src/*.html',
        js: 'src/js/**/*.js',
        css: 'src/scss/style.scss',
        fonts: 'src/fonts/fonts.css'
    },
    
watch: {
    html: 'src/**/*.html',
    js: 'src/**/*.js',
    css: 'src/**/*.scss' 
},
    
    clean: './build'

};


 
gulp.task('webserver', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});

gulp.task('html:build', function() {
   gulp.src(path.src.html)
   .pipe(rigger())
   .pipe(gulp.dest(path.build.html))
   .pipe(reload({stream: true}));
});


// Перенос шрифтов
    gulp.task('fonts', function() {
      gulp.src('src/fonts/**/*')
      //  .pipe(filter(['*.eot','*.svg','*.ttf','*.woff','*.woff2']))
        .pipe(gulp.dest('build/fonts/'))
    });

gulp.task('js:build', function() {
    gulp.src(path.src.js)
//   .pipe(rigger())
   .pipe(sourcemaps.init())
  //  .pipe(uglify())
    .pipe(sourcemaps.write())
     .pipe(gulp.dest(path.build.js))
   .pipe(reload({stream: true}));
});

gulp.task('css:build', function() {
    gulp.src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefixer())    
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
   .pipe(reload({stream: true}));
});


// Картинки
    gulp.task('images', function () {
      return gulp.src('src/img/**/*')
        .pipe(gulp.dest('build/img'));
    });


gulp.task('build', [ 'html:build', 'js:build', 'css:build' ]);


gulp.task('watch', function() {
   watch([path.watch.js], function(ev, callback) {
       gulp.start('js:build');
   });
    
     watch([path.watch.css], function(ev, callback) {
       gulp.start('css:build');
   });
    
     watch([path.watch.html], function(ev, callback) {
       gulp.start('html:build');
   });
    
});


gulp.task('clean',function(callback) {
    rimraf(path.clean, callback);
});


gulp.task('svgSprite', function () {
    return gulp.src('src/img/icons/*.svg') // svg files for sprite
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../spritesvg"  //sprite file name
                    }
                },
            }
        ))
        .pipe(gulp.dest('build/img/icons/'));
});


gulp.task('default', ['build','webserver','fonts','images', 'watch']);