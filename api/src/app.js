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

// app.use(
//     cookieSession({
//         name: "paradise-session",
//         secret: `${process.env.COOKIE}`, // should use as secret environment variable
//         httpOnly: true
//     })
// );

routes.forEach(({ route, router }) => {
    app.use(route, router);
});

// const db = require("./auth/models");
// const Role = db.role;
// db.sequelize.sync();

// require('./auth/routes/auth.routes')(app);
// require('./auth/routes/user.routes')(app);

module.exports = app;