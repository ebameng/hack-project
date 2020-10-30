export const urlQuery= (key, url)=> {
  if (!global.location) {
    return
  }
  url = url || global.location.href
  var reg = new RegExp('[?&#]' + key + '=([^&#]*)', 'i')
  var match = url.match(reg)
  var result

  if (match) {
    try {
      result = decodeURIComponent(match[1]) || ''
      return result
    } catch (e) {
    }
  }
  return ''
}
