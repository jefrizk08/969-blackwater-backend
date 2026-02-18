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

app.post("/sociabuzz", (req, res) => {
    console.log("Webhook dari Sociabuzz masuk")
    console.log(req.body)

    res.status(200).json({ success: true })
})

module.exports = app
