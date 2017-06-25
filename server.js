const app = require('express')()
const bodyJSON = require('body/json')
const {not, all, has } = require('ramda')
let users = [
  { username: 'larry', password: 'stooges'},
  { username: 'moe', password: 'stooges'},
  { username: 'curly', password: 'stooges'}
]
const valid = body => not(all(has('username', body), has('password', body)))

app.get('/api/error', (req, res) => {
  res.status(500).send({ok: false, message: 'Error '})
})

app.get('/api/users', (req, res) => {
  res.send(JSON.stringify(users))
})

app.post('/api/users', (req, res) => {
  bodyJSON(req, res, (err, body) => {
    if (valid(body)) {
      res.status(500).send(JSON.stringify({ok: false, message: 'User needs both "username" and "password"'}))    
    }
    users = [...users, body]
    res.status(201).send(JSON.stringify({ok: true}))
  })
})

app.post('/api/echo', (req, res) => {
  bodyJSON(req, res, (err, body) => {
    res.send(JSON.stringify(body))  
  })
  
})

app.get('/api/widgets', (req, res) => {
  res.send(JSON.stringify(['widget1', 'widget2', 'widget3']))
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/index.js', (req, res) => {
  res.sendFile(__dirname + '/index.js')
})

app.listen(3000)