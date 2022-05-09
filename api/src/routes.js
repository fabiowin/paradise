const clientRoutes = require("./routes/cliente.route")

const routes = [
    {
        route: "/cliente",
        router: clientRoutes
    },
];

module.exports = routes;
