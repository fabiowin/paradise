const clientRoutes = require("./routes/client.route");
const supplierRoutes = require("./routes/supplier.route");
const employeeRoutes = require("./routes/employee.route");
const productRoutes = require("./routes/product.route");
const sellRoutes = require("./routes/sell.route");
const itemRoutes = require("./routes/item.route");
const authRoutes = require("./auth/routes/auth.routes");

const routes = [
    {
        route: "/auth",
        router: authRoutes
    },
    {
        route: "/cliente",
        router: clientRoutes
    },
    {
        route: "/fornecedor",
        router: supplierRoutes
    },
    {
        route: "/funcionario",
        router: employeeRoutes
    },
    {
        route: "/produto",
        router: productRoutes
    },
    {
        route: "/venda",
        router: sellRoutes
    },
    {
        route: "/item",
        router: itemRoutes
    }
];

module.exports = routes;
