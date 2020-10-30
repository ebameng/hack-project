export function urlQuery (key, url) {
  if (!global.location) {
    return
  }
  url = url || global.location.href
  if (key === 'backUrl' && url.indexOf('backUrl') > 0) {
    let back = url.split('backUrl=')[1]
    return back
  }
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