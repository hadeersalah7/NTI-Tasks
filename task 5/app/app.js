const path = require("path")

const express= require("express")

const hbs = require("hbs")

const app = express()


const viewsDir = path.join(__dirname, "../resources/views")
const layoutsDir = path.join(__dirname, "../resources/layouts")
const userRout = require("../routes/userRoutes")


app.set("view engine", "hbs")
app.set("views", viewsDir)

hbs.registerPartials(layoutsDir)

app.use(express.urlencoded({extended: true}))

app.use(userRout) 
// app.get("*", (req, res)=> {
//     res.render("err404", {
//         pageTitle: "Not Found"
//     })
// })
module.exports = app