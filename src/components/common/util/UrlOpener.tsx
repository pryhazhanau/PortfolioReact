export default class UrlOpener {
    static openUrl(url?: string): void {
      if (url && url.length > 0) {
        window.open(url, '_blank')
      } else {
        console.error('URL is not set.')
      }
    }
  }
  