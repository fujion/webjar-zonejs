const {src, dest, series} = require('gulp');

const srcDir = '${webjar.staging}/node_modules/zone.js/';
const destDir = '${webjar.target}/';

function task1() {
    return _copy(['*.md', 'LICENSE']);
}

function task2() {
    return _copy('bundles/**', 'dist');
}

function _toSrc(_src) {
    return src(_src, {allowEmpty: false, cwd: srcDir});
}

function _toDest(_dest) {
    return dest(_dest || '.', {cwd: destDir});
}

function _copy(_src, _dest) {
    console.log('  Copying ' + _src);
    return _toSrc(_src).pipe(_toDest(_dest))
}

exports.default = series(task1, task2);
