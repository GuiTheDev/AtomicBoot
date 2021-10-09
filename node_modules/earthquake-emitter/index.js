'use strict'

var EventEmitter = require('events')
var request = require('request')
var quakeUrl = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson'
var freq = 60000

/*
I emit `earthquake` events with data about the location and magnitude.

Usage:

```js
  var quakes = new EarthquakeEmitter()
  quakes.on('earthquake', (q) => console.log(q.properties.title))
```

Internally, I poll http://earthquake.usgs.gov for geojson data of quakes in
the last 2.5 days. I store the quake ids from the last response, and compare it
with the new response to figure out which quakes are new, and emit those ones.

An average `earthquake` payload looks a bit like this: (there are many other properties)

```js
{
  type: 'Feature',
  properties: {
    mag: 4.7,
    place: '13km NNW of Kandrian, Papua New Guinea',
    time: 1461410344330,
  },
  geometry: {
    type: 'Point',
    coordinates: [ 149.5163, -6.101, 61.89 ]
  },
  id: 'us20005l6g'
}
```
*/
class EarthquakeEmitter extends EventEmitter {

  constructor () {
    super()
    this.emitted = []
    this.on('newListener', (evt) => {
      if (evt !== 'earthquake') return
      if (this.interval) return
      this.interval = setInterval(() => { this.fetch() }, freq)
      setImmediate(() => { this.fetch() })
    })
    this.on('removeListener', (evt) => {
      if (evt !== 'earthquake') return
      if (this.listenerCount('earthquake') > 0) return
      clearInterval(this.interval)
    })
  }

  fetch () {
    request.get({url: quakeUrl, json: true}, (err, res, body) => {
      if (err) return this.emit('error', err)
      if (!body || !body.features) return this.emit('error', 'No features found on response', body)

      // Emit the new earthquakes
      body.features
        .filter(item => this.emitted.indexOf(item.id) === -1)
        .forEach(item => this.emit('earthquake', item))

      // Store the last batch of ids, to filter our next time.
      this.emitted = body.features.map(item => item.id)
    })
  }
}

module.exports = EarthquakeEmitter
