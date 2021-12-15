const express = require("express")
const app = express()

let users = require("../users.json")

app.get('/', (req, res) => {
    res.json(users)
})


app.get('/:slug', (req, res) => {
    const { slug } = req.params
    const user = users.find(user => user.slug === slug)

    res.json(user)
})

app.post('/', (req, res) => {
    const user = {
        slug: req.body.name,
        ...req.body
    }

    users = [...users, user]
    res.json(user)
})


module.exports = app