const { Router } = require("express");
const usersRoutes = require("./users.routes")

const Routes = Router()
Routes.use("/users", usersRoutes);

module.exports = Routes;