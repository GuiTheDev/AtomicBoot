# Public Alerts

[![NPM][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Public Alerts is a module for obtaining emergency messages about hurricanes,
storm warnings and earthquakes.

## Installation

```bash
npm install publicalerts
```

## Usage

```javascript
var publicalerts = require('publicalerts');

// Options:
// query:    any keyword to search
// location: location filter for search

publicalerts.search({location: 'texas'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
});
/*
[
  [
    null,
    "-8092547155034825075",
    "6938810711701504273",
    "Severe Thunderstorm Warning",
    [
      "extreme_thunderstorm",
      "thunderstorm",
      "wind_storm",
      "met"
    ],
    "Southeast Texas",
    1,
    "${event} in ${location}",
    [
      null,
      30.606945322920698,
      -94.03319269248593
    ],
    "National Weather Service",
    0,
    [
      "The National Weather Service in Lake Charles has issued a Severe Thunderstorm..."
    ],
    "Active for next 16 minutes",
    "updated 21 minutes ago",
    "en-US",
    "//www.gstatic.com/images/icons/onebox/publicalerts_storm-24.png",
    "http://alerts.weather.gov/cap/wwacapget.php?x=TX12515A187758.SevereThunderstormWarning.12515A18956CTX.LCHSVRLCH.bd68b6b41660907dbc6b4e3104c71a90",
    "http://www.google.org/publicalerts/alert?aid=8fb17f3d180d1e8d",
    "More info",
    null,
    0.87,
    null,
    null,
    null,
    null,
    null,
    null,
    "Severe Thunderstorm Warning in Southeast Texas",
    [
      [
        null,
        [
          null,
          30.479999999999976,
          -94.14
        ],
        [
          null,
          30.700000000000024,
          -93.91
        ]
      ]
    ]
  ]
]
*/
```

## Notes

* It uses `www.google.org/publicalerts/`

## License

Licensed under The MIT License (MIT)  
For the full copyright and license information, please view the LICENSE.txt file.

[npm-url]: http://npmjs.org/package/publicalerts
[npm-image]: https://badge.fury.io/js/publicalerts.svg

[travis-url]: https://travis-ci.org/devfacet/publicalerts
[travis-image]: https://travis-ci.org/devfacet/publicalerts.svg?branch=master
