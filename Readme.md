
[![Build status][travis-img]][travis-url]
[![Test coverage][coveralls-img]][coveralls-url]
[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Dependency status][david-img]][david-url]

### image.io

### APIs

* resize

* dataUrlToImage
* dataUrlToBlob

### Examples

* resize image file

```js
const file = fileInput.files[0]

resize(file, {
  type: 'scale',
  quality: 0.9,
  scale: 0.4
})
.then(dataURL => dataUrlToBlob(dataURL))
```

### License
MIT

[npm-img]: https://img.shields.io/npm/v/image.io.svg?style=flat-square
[npm-url]: https://npmjs.org/package/image.io
[travis-img]: https://img.shields.io/travis/haoxins/image.io.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/haoxins/image.io
[coveralls-img]: https://img.shields.io/codecov/c/github/haoxins/image.io.svg?branch=master&style=flat-square
[coveralls-url]: https://codecov.io/github/haoxins/image.io?branch=master
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[david-img]: https://img.shields.io/david/haoxins/image.io.svg?style=flat-square
[david-url]: https://david-dm.org/haoxins/image.io
