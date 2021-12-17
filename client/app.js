const axios = require('axios')
const fs = require('fs')
const path = require('path')

// let url = 'https://dangerous-turtle-57.loca.lt/get/info'
let url = 'http://7skhfv.natappfree.cc/get/info'
axios.get(url).then((data) => {
  console.log('code = ', data.status)
  console.log('data = ', data.data)
})

async function getImg() {
  const url = 'http://7skhfv.natappfree.cc/download/info'
  const filePath = path.resolve(__dirname, 'download', 'code.jpg')
  const writer = fs.createWriteStream(filePath)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })
  response.data.pipe(writer)
  new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  })
}

getImg()