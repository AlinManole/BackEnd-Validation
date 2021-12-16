const express = require("express")
const app = express()
const port = 5000
const morgan = require("morgan")
const cors = require("cors")

const usersRoutes = require("./routes/users")

app.use(cors())
app.use(morgan("tiny"))

app.use(express.json())

app.use('/users', usersRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})