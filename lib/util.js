
export const dataUrlToBlob = (dataURL, filename) => {
  let byteString
  if (dataURL.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURL.split(',')[1])
  } else {
    byteString = unescape(dataURL.split(',')[1])
  }

  let bytes = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) {
    bytes[i] = byteString.charCodeAt(i)
  }

  const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]

  const blob = new Blob([bytes], {
    type: mimeString
  })

  if (filename) {
    blob.name = filename
  }

  return blob
}

export const dataUrlToImage = (dataURL) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = dataURL
    img.onload = () => resolve(img)
    img.onerror = reject
  })
}

export const fileToImage = (file) => {
  const type = file.type

  if (!type || !type.startsWith('image/')) {
    throw new Error('file is not image')
  }

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = URL.createObjectURL(file)
    img.onload = () => resolve(img)
    img.onerror = reject
  })
}

export const anyToImg = any => {
  if (any instanceof Image) {
    return Promise.resolve(image)
  } else if (any instanceof File) {
    return fileToImage(any)
  } else if (typeof any === 'string') {
    return dataUrlToImage(any)
  }

  return Promise.reject(new Error('unknown type'))
}
