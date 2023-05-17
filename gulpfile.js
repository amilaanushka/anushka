'use strict';

const fs = require('fs');

const { task, src, dest, watch, parallel, series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const mode = require('gulp-mode')();

const autoprefixer = require( 'gulp-autoprefixer' );
const cleanCSS  = require( 'gulp-clean-css' );
const sourcemaps  = require( 'gulp-sourcemaps' );
const lineec  = require( 'gulp-line-ending-corrector');
const clean = require('gulp-clean');
const browserSync  = require( 'browser-sync' ).create();
const reload  = browserSync.reload;

browserSync.init({
	watch: true,
	server: "./",
	/* open: 'local',
	proxy: 'http://localhost/html/buyrocell-html/', */
	//port: 80,
});

/* const zip = require('gulp-zip');
const chmod = require('gulp-chmod');
const gulpif = require('gulp-if');
const dateFormat = require('dateformat');
const now = new Date(); */

// =================================================================================

const isProduction = mode.production();

const app_watch = './**/*';

const scss_path  = './source/scss/';
const scss_dest  = './assets/css/';
const scss_watch = './source/scss/**/*.scss';

const js_path  = './source/js/';
const js_dest  = './assets/js/';
const js_watch = './source/js/**/*.js';

const imgs_path  = './source/imgs/**';
const imgs_dest  = './assets/imgs/';
const imgs_watch = './source/imgs/**/*.*';

const scss_files_scr = [
    scss_path + 'style.scss'
];
const js_files_src = [
    './node_modules/jquery/dist/jquery.min.js', 
    './node_modules/@popperjs/core/dist/umd/popper.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
	'./node_modules/slick-carousel/slick/slick.js',
	js_path + 'libs/parallax.js',
	js_path + 'libs/fSelect.js',
    js_path + 'app.js',
];

// =================================================================================

if (isProduction) {
    console.log('\u001b[33;1m', '\n\r##################   Production Build   ##################\n\r', '\u001b[0m');
}

function isDirectory(file) {
    var stats = fs.statSync(file.path);
    if(stats.isFile()){
        return false;
    }else if(stats.isDirectory()){
        return true;
    }
    return false;
};

function clean_sourcemaps(cb) {
    try {
        if (fs.existsSync(scss_dest + '/_maps')) {
            return src([scss_dest + '/_maps'], { read: false }).pipe(mode.production( clean({ force: true }) ));
        }
    } catch(err) {
        console.error(err);
    }
    cb();
}

// TASKs =================================================================================

task('sass', function () {
    return src(scss_files_scr)
        .pipe(mode.development( sourcemaps.init({ loadMaps: true }) ))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(mode.development( sourcemaps.write('./_maps/') ))
        .pipe(lineec())
        .pipe(dest(scss_dest));
});

task('scripts', function() {
    return src(js_files_src)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(lineec())
        .pipe(dest(js_dest));
});

task('images_clean', function () {
	return src(imgs_dest + '*', { read: false }).pipe(clean());
});

task('images', function () {
	return src(imgs_path)
		.pipe(imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imagemin.mozjpeg({ quality: 70, progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
		]))
		.pipe(dest(imgs_dest))
});

task('sass:watch', function () {
    watch(scss_watch, task('sass'));
});

task('scripts:watch', function () {
    watch(js_watch, task('scripts'));
});

task('images:watch', function () {
    //watch(imgs_watch, series(['images_clean', 'images']));
	watch(imgs_watch, task('images'));
});

task('changes:watch', function () {
	watch([app_watch, scss_watch, js_watch, imgs_watch]).on('change', reload);
});

if (isProduction) {
    clean_sourcemaps();
}

exports.default = parallel([ 'images_clean', 'scripts', 'scripts:watch', 'sass', 'sass:watch', 'images', 'images:watch', 'changes:watch' ]);