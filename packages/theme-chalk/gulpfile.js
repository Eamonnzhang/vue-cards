'use strict'

const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
// const salad = require('postcss-salad')(require('./salad.config.json'))

const pxtounits = require('postcss-px2units')
const pxtoviewport = require('postcss-px-to-viewport')
const cssnano = require('cssnano')
const presetenv = require('postcss-preset-env')
const rename = require('gulp-rename')

const tobem = require('postcss-bem-fix')

gulp.task('compile:vw', function() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(
      postcss([
        tobem({
          shortcuts: {
            component: 'b',
            modifier: 'm',
            descendent: 'e'
          },
          separators: {
            descendent: '__',
            modifier: '--'
          }
        }),
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
        tobem({
          shortcuts: {
            component: 'b',
            modifier: 'm',
            descendent: 'e'
          },
          separators: {
            descendent: '__',
            modifier: '--'
          }
        }),
        presetenv(),
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
  return gulp.src('./src/fonts/**').pipe(gulp.dest('./lib/fonts'))
})

gulp.task('build', ['compile:vw', 'compile:px', 'copyfont'])
gulp.task('watch', function() {
  gulp.watch('./src/*.scss', ['compile:vw', 'compile:px'])
})

gulp.task('watch:fonts', function() {
  gulp.watch('./src/fonts/**', ['copyfont'])
})

gulp.task('default', ['build', 'watch', 'watch:fonts'])
