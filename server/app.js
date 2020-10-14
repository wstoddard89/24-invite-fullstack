const axios = require("axios")
const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let isGoing = []
let notGoing = []

app.get("/api", (req, res) => {
  axios.get("https://randomuser.me/api/").then((r) => {
    const user = r.data.results[0]
    res.json({
      picture: user.picture.large,
      first: user.name.first,
      last: user.name.last,
      email: user.email,
      phone: user.phone,
    })
  })
})


app.get("/api/notgoing", (req, res) => {
  res.json(notGoing)
})


app.post("/api/mark-invitee", (req, res) => {
    const user = req.body
    if (user.going == true) {
        isGoing.push(user)
    } else if (user.going === false) {
        notGoing.push(user)
    }
    console.log(isGoing)
    console.log(notGoing)
    res.json(user)
})

app.get("/api/isgoing", (req, res) => {
  res.json(isGoing)
})


app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})
