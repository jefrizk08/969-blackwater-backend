const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        name: "969 BLACK WATER CLUB",
        status: "Backend aktif 🚀"
    })
})

app.get("/donations", (req, res) => {
    res.json([
        { username: "Jefri", amount: 969 },
        { username: "BlackWater", amount: 1500 }
    ])
})

module.exports = app
