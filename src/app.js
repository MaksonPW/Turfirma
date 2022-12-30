const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public" );
const template_path = path.join(__dirname, "../templates/views" );
const partials_path = path.join(__dirname, "../templates/partials" );

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path)

app.get("/", (req, res) => {
    res.render("index")
});

app.get('/login', (req, res) => {
    res.render('indexLog')
})

app.get('/registration', (req, res) => {
    res.render('indexReg')
})

app.get('/main', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`server in running at port no ${port}`);
})