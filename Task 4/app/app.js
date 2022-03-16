const path = require("path")

const express = require("express")

const hbs = require("hbs")

const app = express()

const viewDir = path.join(__dirname, "../resources/views")

const layoutDir = path.join(__dirname, "../resources/layouts")

// const staticDir = path.join(__dirname, "../assets")

const customerRoute = require("../routes/customer.routes")

app.set("view engine", "hbs")
app.set("views", viewDir)

hbs.registerPartials(layoutDir)


// app.use( express.static( staticDir ))

app.use(customerRoute)

module.exports = app