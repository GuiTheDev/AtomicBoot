var test = require('tape')
var EarthquakeEmitter = require('..')

test('emit an earthquake event', (t) => {
  t.plan(4)
  var seismo = new EarthquakeEmitter()
  seismo.once('earthquake', quakeHandler)
  function quakeHandler (quake) {
    t.ok(quake, 'payload is not null')
    t.ok(quake.properties, 'payload has properties')
    t.ok(quake.geometry, 'payload has geometry')
    t.ok(quake.id, 'payload has id')
    t.end()
    seismo.removeListener('earthquake', quakeHandler)
  }
})
