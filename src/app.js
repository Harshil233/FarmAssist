const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("", (req, res) => {
    res.render('index')
})

app.get("/advisory", (req, res) => {
    res.render('advisory')
})

app.get("/govtschemes", (req, res) => {
    res.render('govtschemes')
})

app.get("/machinery", (req, res) => {
    res.render('machinery')
})
app.get("/agriculture", (req, res) => {
    res.render('agriculture')
})
app.get("/marketing", (req, res) => {
    res.render('marketing')
})
app.get("/earn", (req, res) => {
    res.render('earn')
})

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg: 'Oops! Page not found'
    })
})

app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})