'use strict'

var gulp = require('gulp')
var postcss = require('gulp-postcss')
var sass = require('gulp-sass')
var cssmin = require('gulp-cssmin')
var salad = require('postcss-salad')(require('./salad.config.json'))
var pxtounits = require('postcss-px2units')
var pxtoviewport = require('postcss-px-to-viewport')
var cssnano = require('cssnano')
var presetenv = require('postcss-preset-env')
var rename = require('gulp-rename')

gulp.task('compile:vw', function() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(
      postcss([
        salad,
        pxtoviewport({
          viewportWidth: 750, // (Number) The width of the viewport.
          viewportHeight: 1334, // (Number) The height of the viewport.
          unitPrecision: 3, // (Number) 转换的时候除不尽保留3位小数.
          viewportUnit: 'vw', // (String) 转换为vw单位.
          selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
          minPixelValue: 1, // (Number) 小于或等于'1px'不转换为视窗单位.
          mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
          unitToConvert: 'px'
        }),
        presetenv(),
        cssnano({
          'cssnano-preset-advanced': {
            zindex: false,
            autoprefixer: false
          }
        })
      ])
    )
    .pipe(cssmin())
    .pipe(rename({ suffix: '.vw' }))
    .pipe(gulp.dest('./lib'))
})

gulp.task('compile:px', function() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(
      postcss([
        salad,
        pxtounits({
          divisor: 2,
          targetUnits: 'px'
        })
      ])
    )
    .pipe(cssmin())
    .pipe(rename({ suffix: '.px' }))
    .pipe(gulp.dest('./lib'))
})

gulp.task('copyfont', function() {
  return gulp
    .src('./src/fonts/**')
    .pipe(gulp.dest('./lib/fonts'))
})

gulp.task('build', ['compile:vw', 'compile:px', 'copyfont'])
gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['compile:vw', 'compile:px'])
})

gulp.task('watch:fonts', function() {
  gulp.watch('./src/fonts/**', ['copyfont'])
})

gulp.task('default', ['build', 'watch','watch:fonts'])
