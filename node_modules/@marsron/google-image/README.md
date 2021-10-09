# @marsron/google-image

Another Google Image Search NodeJS module. The nature of these things is that they eventually break as GIS changes, but this one works as of August 1st 2021.

## Installation

Install `@marsron/google-image` with npm

```sh
npm install @marsron/google-image
```

## Usage / Examples

```js
const googleImage = require('@marsron/google-image')

googleImage('cats')
  .then(results => {
    console.log(results)
  })
  .catch(error => {
    console.error(error)
  })
```

Output:
```json
[
  {
    "url": "https://i.ytimg.com/vi/mW3S0u8bj58/maxresdefault.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "url": "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
    "width": 1600,
    "height": 1200
  },
  {
    "url": "https://www.petfinder.com/wp-content/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg",
    "width": 632,
    "height": 353
  },
  {
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg",
    "width": 3415,
    "height": 2268
  },
  ...
]
```

If you want to pass additional stuff to tack onto the Google image search URL, pass an object containing `additionalQuery`. For example:

```js
const options = {
  additionalQuery: {
    tbs: 'isz:l' // Large image size
  }
}

googleImage('cat', options).then(...)
```

You can limit the number of results:

```js
const options = {
  additionalQuery: {
    tbs: 'isz:l' // Large image size
  },
  limit: 5
}

googleImage('cat', options).then(...)
```

You can also filter out results from specified domains:

```js
const options = {
  additionalQuery: {
    tbs: 'isz:l' // Large image size
  },
  limit: 5,
  blacklistDomains: [
    'pinterest.com',
    'deviantart.com'
  ]
}

googleImage('cat', options).then(...)
```

Specifying `blacklistDomains` will both tell Google to not to include results that come from web pages on those domains and also filter image results that are hosted on those domains. (Sometimes an image is on an HTML page on a domain not included in your filters and has an `img` tag that loads from a domain that is included in your filters.)

Everything can be crammed into a object as well using `query`:

```js
const options = {
  query: 'cat',
  additionalQuery: {
    tbs: 'isz:l' // Large image size
  },
  limit: 5,
  blacklistDomains: [
    'pinterest.com',
    'deviantart.com'
  ]
}
googleImage(options).then(...)
```

## Support

For support, email marsron204@gmail.com or message `MarsRon#7602` on Discord.

## License

[MIT](https://github.com/MarsRon/google-image/blob/main/LICENSE.md)
