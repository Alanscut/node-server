const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type'
}

app.get('/get/info', (req, res) => {
  res.set(cors)
  res.send('Got a GET request at /get/info')
})

app.post('/post/info', (req, res) => {
  console.log('*** post --> ' + JSON.stringify(req.body))
  res.set(cors)
  res.send('Got a POST request at /post/info')
})

app.put('/put/info', (req, res) => {
  console.log('*** put --> ' + JSON.stringify(req.body))
  res.set(cors)
  res.send('Got a PUT request at /put/info')
})

app.delete('/delete/info', (req, res) => {
  res.set(cors)
  res.send('Got a DELETE request at /delete/info')
})

app.get('/download/info', (req, res) => {
  const filePath = './file/img/code.jpg'
  fs.readFile(filePath, 'binary', (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain'})
      res.write(err + '\n')
      res.send()
    } else {
      res.writeHead(200, { 'Content-Type': 'image/png'})
      res.write(file, 'binary')
      res.end()
    }
  })
})

var server = app.listen(3000, () => {
  console.log('服务开启成功！');
})