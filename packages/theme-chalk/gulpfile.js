'use strict'
const { watch, series, src, dest, parallel } = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const pxtounits = require('postcss-px2units')
const pxtoviewport = require('postcss-px-to-viewport')
const cssnano = require('cssnano')
const presetenv = require('postcss-preset-env')
const rename = require('gulp-rename')
const tobem = require('postcss-bem-fix')

let bemConfig = {
  shortcuts: {
    component: 'b',
    modifier: 'm',
    descendent: 'e'
  },
  separators: {
    descendent: '__',
    modifier: '--'
  }
}

function compileCssToVw(done) {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(
      postcss([
        tobem(bemConfig),
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
    .pipe(dest('./lib'))
}

function compileCssToPx(done) {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(
      postcss([
        tobem(bemConfig),
        presetenv(),
        pxtounits({
          divisor: 2,
          targetUnits: 'px'
        })
      ])
    )
    .pipe(cssmin())
    .pipe(rename({ suffix: '.px' }))
    .pipe(dest('./lib'))
}

function copyFont(done) {
  return src('./src/fonts/**').pipe(dest('./lib/fonts'))
}

function watchCss(done) {
  return watch('./src/*.scss', parallel(compileCssToVw, compileCssToPx))
}

function watchFonts(done) {
  return watch('./src/fonts/**', copyFont)
}

exports.build = parallel(compileCssToVw, compileCssToPx, copyFont)
exports.default = series(
  compileCssToVw,
  compileCssToPx,
  copyFont,
  parallel(watchCss, watchFonts)
)
