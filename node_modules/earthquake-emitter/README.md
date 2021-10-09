# earthquake-emitter

I emit `earthquake` events with data about the location and magnitude.

Usage:

```js
  var quakes = new EarthquakeEmitter()
  quakes.on('earthquake', (q) => console.log(q.properties.title))
  // M 2.6 - 8km NW of Gerlach-Empire, Nevada
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

---

A [(╯°□°）╯︵TABLEFLIP](https://tableflip.io) side project.