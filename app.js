const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get('/', function(req, res) {

    const today = new Date();

    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const day = today.toLocaleDateString("en-US", options);

    res.render('list', { kindOfDay: day, newItems: items });
});

app.post('/', function(req, res) {
    item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});

app.listen(process.env.PORT || port, function() {
    console.log(`Example app listening at http://localhost:${port}`);
});