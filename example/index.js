
import { dataUrlToImage, dataUrlToBlob, resize } from '../lib'

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
    .then(img => document.querySelector('main').appendChild(img))
  }
}
