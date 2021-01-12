const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`servers is started and listening on ${PORT}`)
})