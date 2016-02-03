
import { strictEqual as equal } from 'assert'
import { getCanvasSize } from '../lib/kit'

describe('## kit', () => {
  describe('# getCanvasSize', () => {
    it('opts.type = scale - scale: 0.1', () => {
      const { canvasW, canvasH } = getCanvasSize(800, 600, { type: 'scale', scale: 0.1 })
      equal(canvasW, 80)
      equal(canvasH, 60)
    })

    it('opts.type = scale - default scale: 0.6', () => {
      const { canvasW, canvasH } = getCanvasSize(800, 600, { type: 'scale' })
      equal(canvasW, 480)
      equal(canvasH, 360)
    })

    it('opts.maxWidth = 400', () => {
      const { canvasW, canvasH } = getCanvasSize(800, 600, { maxWidth: 400 })
      equal(canvasW, 400)
      equal(canvasH, 300)
    })

    it('opts.maxHeight = 300', () => {
      const { canvasW, canvasH } = getCanvasSize(800, 600, { maxHeight: 300 })
      equal(canvasW, 400)
      equal(canvasH, 300)
    })

    it('opts.maxWidth = x, opts.maxHeight = y', () => {
      console.warn('TODO')
    })
  })
})
