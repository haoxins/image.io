
export const getCanvasSize = (originW, originH, opts) => {
  const { maxHeight, maxWidth, scale = 0.6 } = opts

  const result = {
    canvasW: originW,
    canvasH: originH
  }

  if (opts.type === 'scale') {
    result.canvasW = (originW * scale) | 0
    result.canvasH = (originH * scale) | 0

    return result
  }

  if (maxHeight || maxWidth) {
    if (maxHeight && (result.canvasH > maxHeight)) {
      let x = maxHeight / result.canvasH

      result.canvasH = result.canvasH * x | 0
      result.canvasW = result.canvasW * x | 0
    }

    if (maxWidth && (result.canvasW > maxWidth)) {
      let y = maxWidth / result.canvasW

      result.canvasH = result.canvasH * y | 0
      result.canvasW = result.canvasW * y | 0
    }
  }

  return result
}
