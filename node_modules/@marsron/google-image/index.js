const fetch = require('node-fetch')
const cheerio = require('cheerio')

const baseURL = 'https://images.google.com/search?'

const imageFileExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg']

const getURI = obj => new URLSearchParams(obj).toString()

const flatten = array => {
  const result = []
  for (const value of array) {
    result.push(...value)
  }
  return result
}

async function googleImage (query, options = {}) {
  if (typeof query === 'object') {
    options = query
  }
  if (options.query) {
    query = options.query
  }
  if (options.blacklistDomains) {
    options.blacklistDomains = ['gstatic.com'].concat(options.blacklistDomains)
  } else {
    options.blacklistDomains = ['gstatic.com']
  }
  options.limit ??= 100

  const blacklist = options.blacklistDomains.map(s => `-site:${s}`).join(' ')

  const queryURI = getURI({
    q: query + ' ' + blacklist,
    tbm: 'isch'
  })

  let url = baseURL + queryURI
  if (options.additionalQuery) {
    url += '&' + getURI(options.additionalQuery)
  }

  const response = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }
  })
  const body = await response.text()

  const $ = cheerio.load(body)
  const scriptContents = $('script')
    .toArray()
    .filter(script => script.children.length > 0)
    .map(script => script.children[0].data)
    .filter(content => {
      content = content.toLowerCase()
      return imageFileExtensions.some(ext => content.includes(ext))
    })

  const results = scriptContents.map(content => {
    const images = []
    const regex = /\["(http.+?)",(\d+),(\d+)\]/g
    let regexResult
    while ((regexResult = regex.exec(content)) !== null) {
      const image = {
        url: regexResult[1],
        width: +regexResult[3],
        height: +regexResult[2]
      }
      if (
        options.blacklistDomains.every(
          skipDomain => !image.url.includes(skipDomain)
        )
      ) {
        images.push(image)
      }
    }
    return images
  })

  return flatten(results).slice(0, options.limit)
}

module.exports = googleImage
