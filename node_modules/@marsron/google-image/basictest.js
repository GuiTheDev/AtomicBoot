const googleImage = require('.')

googleImage('cat', { limit: 3 })
  .then(results => {
    console.log(results)
  })
  .catch(error => {
    console.error(error)
  })
