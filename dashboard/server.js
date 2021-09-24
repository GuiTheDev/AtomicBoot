const express = require('express');
const app = express();
 

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');


app.get('/', (req, res) => res.render('index', {
    something: 'testing pog'
}));

app.listen(3000, () => console.log('web server ON on port 3000'));