var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass')
    //autoprefixer = require('gulp-autoprefixer'),
    //uglify = require('gulp-uglify'),
    //concat = require('gulp-concat'),
    //header  = require('gulp-header'),
    //rename = require('gulp-rename'),
    //minifyCSS = require('gulp-minify-css'),
    //package = require('./package.json'),
    //replace = require('gulp-replace'),
    //debug = require('gulp-debug'),
    //pawn = require('child_process').spawn,
    //csslint = require('gulp-csslint'),
    //file = require('gulp-file'),
    //sourcemaps = require('gulp-sourcemaps'),
    //fileinclude = require('gulp-file-include'),
    //svgmin = require('gulp-svgmin'),
    //raster = require('gulp-raster'),
    //combineMq = require('gulp-combine-mq'),
    //gzip = require('gulp-gzip'),
    //cssshrink = require('gulp-cssshrink'),
    //psi = require('psi'),
    //requireDir = require('require-dir'),
    //shell = require('gulp-shell'),
    //casperJs = require('gulp-casperjs'),
    //gutil = require('gulp-util'),
    //psi = require('psi'),
    //fs = require('fs'),
    //mkdirp = require('mkdirp')
    ;


var banner = [
    '/*!\n' +
    ' * <%= package.name %>\n' +
    ' * <%= package.title %>\n' +
    ' * <%= package.url %>\n' +
    ' * @author <%= package.author %>\n' +
    ' * @version <%= package.version %>\n' +
    ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
    ' */',
    '\n'
].join('');

///* -------------------------------------------- */
///* ---------------- Sass Tasks ---------------- */
///* -------------------------------------------- */
//gulp.task('sass', function () {
//    return gulp.src([
//        'app/assets/sass/main.scss',
//        'app/assets/sass/blogs.scss',
//        'app/assets/sass/main_rtl.scss'
//    ])
//        //.pipe(sourcemaps.init())
//        .pipe(sass({errLogToConsole: true, sourceComments: true}))
//        .pipe(header(banner, { package : package } ))
//        //.pipe(sourcemaps.write('maps'))
//        .pipe(gulp.dest('dist/assets/css'))
//        .pipe(gulp.dest('assets/css'))
//        .pipe(minifyCSS({
//            removeDuplicates: true
//        }))
//        .pipe(rename({suffix: ".min"}))
//        .pipe(gulp.dest('dist/assets/css'))
//        .pipe(gulp.dest('assets/css'))
//        .pipe(browserSync.reload({stream:true, once: true}));
//});
//
//
//gulp.task('CSStests', shell.task([
//    'node compareNavigation.js'
//].join(' && '),{
//    cwd: './CSS-regression'
//}));
//
//gulp.task('sassTest', function () {
//    return gulp.src('dist/assets/css/main.css')
//        .pipe(sass({errLogToConsole: true}))
//        .pipe(csslint())
//        .pipe(csslint.reporter());
//});
///* ---------------------------------------------------------- */
///* ---------------- Peformance Testing Tasks ---------------- */
///* ---------------------------------------------------------- */
//var perfLocation = 'http://startsitedevwe.bdo.global/en-gb/home';
//var key = '';
//var date = new Date();
//
//var generatePerfDocument = function(responseData) {
//    mkdirp('./performance-testing', function(err) {
//        // path was created unless there was error
//    });
//    var fullDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + '-' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds();
//    //var perfMobileDoc = fs.createWriteStream('./performance-testing/perfMobileDoc.json');
//    var perfMobileDoc = fs.createWriteStream('./performance-testing/perfMobileDoc-' + fullDate + '.json');
//    var tempObject = {};
//    //perfMobileDoc.write('[ \n');
//    //    perfMobileDoc.write('{ \n');
//    //        perfMobileDoc.write('"title": "' + responseData.title + '",\n');
//    //        perfMobileDoc.write('"url" : "' + responseData.id + '",\n');
//    //        perfMobileDoc.write('"speedscore" : "' + responseData.ruleGroups.SPEED.score + '"\n');
//    //    perfMobileDoc.write('},  \n');
//    //perfMobileDoc.write('] \n');
//    //perfMobileDoc.end(function () {
//    //    console.log('generated document: perfMobileDoc-' + fullDate + '.json');
//    //});
//
//    tempObject.date = fullDate;
//    tempObject.title = responseData.title;
//    tempObject.url = responseData.id;
//    tempObject.speedscore = responseData.ruleGroups.SPEED.score;
//    console.log('tempObject: ', tempObject);
//
//    //var item = './performance-testing/perfMobileDoc.json';
//    //fs.readFile(item, 'utf8', function (err, data){
//    //    if (err) throw err;
//    //    console.log(item + " before: " + data);
//    //});
//    //// Append text to file
//    //fs.appendFile(item, ',{"google" : "value"}', function (err) {
//    //    if (err) throw err;
//    //    console.log("Text appended.");
//    //});
//    //// Read file
//    //fs.readFile(item, 'utf8', function (err, data){
//    //    if (err) throw err;
//    //    console.log(item + " after: " + data);
//    //});
//    //
//};
//
//gulp.task('test', function() {
//    var item = './performance-testing/perfMobileDoc.json';
//    fs.readFile(item, 'utf8', function (err, data){
//        if (err) throw err;
//        console.log(item + " before: " + data);
//    });
//    // Append text to file
//    fs.appendFile(item, ',{"google" : "value"}', function (err) {
//        if (err) throw err;
//        console.log("Text appended.");
//    });
//    // Read file
//    fs.readFile(item, 'utf8', function (err, data){
//        if (err) throw err;
//        console.log(item + " after: " + data);
//    });
//});
//
//gulp.task('perf-mobile', function () {
//    return psi(perfLocation, {
//        // key: key
//        nokey: 'true',
//        strategy: 'mobile',
//    }).then(function (data) {
//        console.log('Speed score mobile: ' + data.ruleGroups.SPEED.score);
//        console.log('Usability score mobile: ' + data.ruleGroups.USABILITY.score);
//        //perfMobileDoc.write(data.title + '\n');
//        //perfMobileDoc.write(data.title + '\n');
//        //perfMobileDoc.end(function () { console.log('generated document: perfMobileDoc-' + fullDate + '.txt'); });
//        //generatePerfDocument(data);
//    });
//});
//
//gulp.task('perf-desktop', function () {
//    return psi(perfLocation, {
//        nokey: 'true',
//        // key: key,
//        strategy: 'desktop',
//    }).then(function (data) {
//        console.log('Speed score desktop: ' + data.ruleGroups.SPEED.score);
//    });
//});
//
//gulp.task('perf', ['perf-mobile', 'perf-desktop']);
//
//
///* -------------------------------------------------- */
///* ---------------- Javascript Tasks ---------------- */
///* -------------------------------------------------- */
//gulp.task('js',function(){
//    gulp.src([
//        'app/assets/js/jquery.min.js',
//        'app/assets/js/jquery.flexslider-min.js',
//        'app/assets/js/jquery.bxslider.js',
//        'app/assets/js/mustach.min.js',
//        'app/assets/js/jquery.lazyload-google-maps.js',
//        'app/assets/js/google-maps.js',
//        'app/assets/js/blazy.min.js',
//        'app/assets/js/home.js',
//        'app/assets/js/master.js'
//    ])
//    .pipe(concat('main.js'))
//    .pipe(header(banner, { package : package }))
//    .pipe(gulp.dest('dist/assets/js'))
//    .pipe(gulp.dest('assets/js'))
//    .pipe(uglify())
//    .pipe(header(banner, { package : package }))
//    .pipe(rename({ suffix: '.min' }))
//    .pipe(gulp.dest('dist/assets/js'))
//    .pipe(gulp.dest('assets/js'))
//    .pipe(browserSync.reload({stream:true, once: true}));
//});
//
//gulp.task('jsblog',function(){
//    gulp.src([
//        'app/assets/js/jquery.min.js',
//        'app/assets/js/jquery.watermark.js',
//        'app/assets/js/blog.js'
//    ])
//    .pipe(concat('blogs.js'))
//    .pipe(header(banner, { package : package }))
//    .pipe(gulp.dest('dist/assets/js'))
//    .pipe(gulp.dest('assets/js'))
//    .pipe(uglify())
//    .pipe(header(banner, { package : package }))
//    .pipe(rename({ suffix: '.min' }))
//    .pipe(gulp.dest('dist/assets/js'))
//    .pipe(gulp.dest('assets/js'))
//    .pipe(browserSync.reload({stream:true, once: true}));
//});

/* -------------------------------------------- */
/* ---------------- HTML Tasks ---------------- */
/* -------------------------------------------- */
gulp.task('html',function(){
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true, once: true}));
});
//
///* -------------------------------------------- */
///* ---------------- Font Tasks ---------------- */
///* -------------------------------------------- */
//gulp.task('fonts',function(){
//    return gulp.src('app/assets/fonts/**/*')
//        .pipe(gulp.dest('dist/assets/fonts/'))
//        .pipe(gulp.dest('assets/fonts/'))
//        .pipe(browserSync.reload({stream:true, once: true}));
//});
//
///* -------------------------------------------- */
///* ---------------- SVG Tasks ---------------- */
///* -------------------------------------------- */
//gulp.task('svg', function () {
//    return gulp.src('app/assets/img/*.svg')
//        .pipe(svgmin())
//        .pipe(gulp.dest('dist/assets/img'))
//        .pipe(gulp.dest('assets/img'))
//        .pipe(raster())
//        .pipe(rename({extname: '.png'}))
//        .pipe(gulp.dest('dist/assets/img'));
//});
//
///* --------------------------------------------- */
///* ---------------- Image Tasks ---------------- */
///* --------------------------------------------- */
//gulp.task('image',function(){
//    return gulp.src([
//        'app/assets/img/**/*.gif',
//        'app/assets/img/**/*.png',
//        'app/assets/img/**/*.jpg'
//    ])
//        .pipe(gulp.dest('dist/assets/img/'))
//        .pipe(gulp.dest('assets/img/'))
//        .pipe(browserSync.reload({stream:true, once: true}));
//});
//
///* -------------------------------------------- */
///* ---------------- Json Tasks ---------------- */
///* -------------------------------------------- */
//gulp.task('json',function(){
//    return gulp.src('app/assets/json/*')
//        .pipe(gulp.dest('dist/assets/json/'))
//        .pipe(gulp.dest('assets/json/'))
//        .pipe(browserSync.reload({stream:true, once: true}));
//});
//
///* ----------------------------------------------- */
///* ---------------- Favicon Tasks ---------------- */
///* ----------------------------------------------- */
//gulp.task('favicon',function(){
//    return gulp.src('app/assets/*.ico')
//        .pipe(gulp.dest('dist/assets/'))
//        .pipe(gulp.dest('assets/'))
//        .pipe(browserSync.reload({stream:true, once: true}));
//});
//
/* ---------------------------------------------- */
/* ---------------- Browser Sync ---------------- */
/* ---------------------------------------------- */
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "dist"
        },
        open: false
    });
});

/* ---------------------------------------------- */
/* ---------------- Default tasks---------------- */
/* ---------------------------------------------- */
gulp.task('default', ['html', 'browser-sync'], function () {
    gulp.watch("app/assets/fonts/*", ['fonts']);
    gulp.watch("app/assets/json/*", ['json']);
    gulp.watch("app/assets/img/*", ['image', 'svg']);
    gulp.watch("app/assets/sass/**/*.scss", ['sass']);
    gulp.watch("app/assets/js/**/*.js", ['js']);
    gulp.watch("app/**/*.html", ['html']);
});