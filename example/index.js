
import {
  dataUrlToImage,
  dataUrlToBlob,
  resize,
  crop
} from '../lib'

window.resizeImage = () => {
  const file = document.querySelector('#image-file').files[0]

  if (file) {
    resize(file, {
      type: 'scale',
      quality: 0.9,
      scale: 0.4
    })
    .then(dataURL => {
      console.info('blob:', dataUrlToBlob(dataURL))
      return dataURL
    })
    .then(dataURL => dataUrlToImage(dataURL))
    .then(img => document.querySelector('#resize').appendChild(img))

    crop(file, {
      quality: 0.9,
      x: 20,
      y: 20,
      width: 80,
      height: 60
    })
    .then(dataURL => dataUrlToImage(dataURL))
    .then(img => document.querySelector('#crop').appendChild(img))
  }
}
