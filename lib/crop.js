
import { dataUrlToImage, anyToImg } from './util'

/**
 * @param {dataUrl|Image|File} image
 * @param {Object} opts
 *   - opts.quality
 *
 *   - opts.x
 *   - opts.y
 *   - opts.width
 *   - opts.height
 */

const crop = (image, opts = {}) => {

  return anyToImg(image)
    .then(img => {
      const {
        quality = 0.8,
        height,
        width,
        y,
        x
      } = opts

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.height = height
      canvas.width = width

      ctx.drawImage(img, x, y, width, height, 0, 0, width, height)

      return canvas.toDataURL('image/jpeg', quality)
    })
}

export default crop
