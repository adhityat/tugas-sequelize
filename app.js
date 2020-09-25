const express = require('express')
const morgan = require('morgan')
const app = express()
const routing = require('./routing/index')
const port = 3000
const session = require('express-session')


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static('assets'))
app.use(session({
  secret: 'fosanacademy',
  saveUninitialized: false,
  resave: true,
  cookie: { maxAge: 60000 }
}))

app.use('/', routing)


app.listen(port, () => {
  console.log(`telah tersambung pada port : ${port}`)
})