export default async function handler(req, res) {

  if (req.method === "POST") {
    console.log("🔥 WEBHOOK MASUK")

    return res.status(200).json({
      success: true
    })
  }

  return res.status(200).json({
    status: "Webhook ready"
  })
}
