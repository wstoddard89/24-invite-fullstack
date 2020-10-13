const axios = require("axios")
const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// let invites = [
//   {
//     name: "",
//     email: "",
//     phone: "",
//   },
// ]
app.get("/api", (req, res) => {
  axios.get("https://randomuser.me/api/").then((r) => {
    const user = r.data.results[0]
    res.json({picture: user.picture.large,
              first: user.name.first,
              last: user.name.last,
              email: user.email,
              phone: user.phone
        })
  })
})

// app.post("/", (req, res) => {
//   invites.push({ image: req.body.picture.large, name: req.body.name })
//   res.json(req.body)
// })

app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})
