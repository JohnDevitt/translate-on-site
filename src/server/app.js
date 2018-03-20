const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const Translate = require('@google-cloud/translate')

const app = express()
const translate = new Translate({projectId: 'translateonsight-1520071994226'})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/translate', async (req, res) => {
  const translationChunks = _.chunk(req.body.visibleTextList, 128)
  const translatedList = await Promise.all(translationChunks.map(async (chunk, index) => {
    try {
      return translate.translate(chunk, req.body.target)
    } catch (err) {
      console.log(err)
      return ['error']
    }
  }))
  const formattedList = [].concat(...translatedList.map(list => {
    return [].concat(...list[0])
  }))
  res.send(JSON.stringify(formattedList))
})

app.listen(3000)
