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

// app.get("/api/going", (req, res) => {
//   res.json(isGoing)
// })

app.get("/api/notgoing", (req, res) => {
  res.json(notGoing)
})


app.post("/api/mark-invitee", (req, res) => {
    if (req.body.going == true) {
        isGoing.push(req.body)
    } else if (req.body.going === false) {
        notGoing.push(req.body)
    }
    console.log(isGoing)
    console.log(notGoing)
})

app.get("/api/isgoing", (req, res) => {
  res.json(isGoing)
})


app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})
