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
    res.json(global.donations || [])
})

app.post("/sociabuzz", (req, res) => {
    const data = req.body

    if (!global.donations) global.donations = []

    global.donations.push({
        username: data.name,
        amount: data.amount
    })

    console.log("Donasi masuk:", data)

    res.json({ success: true })
})

module.exports = app
