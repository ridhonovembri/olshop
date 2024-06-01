const express = require('express')
const cors = require('cors')

require('dotenv').config()

let corsOption = {
    origin: '*'
}

const app = express()
app.use(cors(corsOption))

app.get('/', (req, res) => {
    res.send('Hi React Native!')
})

let PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`Server Running PORT ${PORT}`)
})
