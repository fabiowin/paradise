const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const routes = require("./routes");
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.forEach(({ route, router }) => {
    app.use(route, router);
});

module.exports = app;