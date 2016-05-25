
import { dataUrlToImage, anyToImg } from './util'
import { getCanvasSize } from './kit'

/**
 * @param {dataUrl|Image|File} image
 * @param {Object} opts
 *   - opts.quality
 *
 *   - opts.type: scale
 *   - opts.scale
 *
 *   - opts.maxHeight
 *   - opts.maxWidth
 */

const resize = (image, opts = {}) => {

  return anyToImg(image)
    .then(img => {
      const { quality = 0.8 } = opts

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      const [originX, originY] = [0, 0]
      const originW = img.width
      const originH = img.height

      const [canvasX, canvasY] = [0, 0]
      const {canvasW, canvasH} = getCanvasSize(originW, originH, opts)

      canvas.width = canvasW
      canvas.height = canvasH

      console.info(originX, originY, originW, originH, canvasX, canvasY, canvasH, canvasW)
      ctx.drawImage(img, originX, originY, originW, originH, canvasX, canvasY, canvasW, canvasH)

      return canvas.toDataURL('image/jpeg', quality)
    })
}

export default resize
