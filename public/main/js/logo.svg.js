function getLogoBase64(type) {
  const red_url = window.location.href + '/favicons/red.png'
  const green_url = window.location.href + '/favicons/green.png'

  let url = red_url
  if (type == 'green') {
    url = green_url
  }

  return fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    }))
}
