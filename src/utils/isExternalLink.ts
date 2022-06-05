export const isExternalLink = (link?: string) => {
  if (!link) return

  const host = window.location.hostname

  const linkHost = (function (url) {
    if (/^https?:\/\//.test(url)) {
      // Absolute URL.
      // The easy way to parse an URL, is to create <a> element.
      // @see: https://gist.github.com/jlong/2428561
      var parser = document.createElement('a')
      parser.href = url

      return parser.hostname
    } else {
      // Relative URL.
      return window.location.hostname
    }
  })(link)

  return host !== linkHost
}
