const express = require("express")
const { Redis } = require("@upstash/redis")

const app = express()
app.use(express.json())

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

app.get("/", (req, res) => {
  res.json({ status: "969 BLACK WATER BACKEND PRO 🚀" })
})

app.post("/sociabuzz", async (req, res) => {
  try {

    const data = req.body

    const donation = {
      id: Date.now().toString(),
      nama: data.name || "Anonymous",
      amount: Number(data.amount) || 0,
      message: data.message || "",
      timestamp: new Date().toISOString()
    }

    await redis.lpush("donations", donation)
    await redis.zincrby("leaderboard", donation.amount, donation.nama)

    res.json({ success: true })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get("/donations", async (req, res) => {
  const data = await redis.lrange("donations", 0, 20)
  res.json(data)
})

app.get("/leaderboard", async (req, res) => {
  const data = await redis.zrevrange("leaderboard", 0, 9, { withScores: true })
  res.json(data)
})

module.exports = app
