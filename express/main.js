const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/query', (req, res) => {
  if (req.query.s) {
    return res.send(`query ${req.query.s}`)
  }
  return res.send('unknown query')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})