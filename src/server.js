const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const buildPath = path.resolve(__dirname, '..', 'build')

app.use(express.static(path.join(buildPath)))

app.get('*', (_, res) => {
  res.sendFile(path.resolve(path.join(buildPath, 'index.html')))
})

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`)
})