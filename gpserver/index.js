const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db/mongoose')
const routes = require('./routes/routes')

// import {connectDatabase}  from './db/mongoose'
// import {routes} from './routes/routes'
const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())

console.log(process.env.Port);
app.get('/', (req, res) => {
    res.send('Hello Developer!')
})
db.connectDatabase();
routes.routes(app);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))