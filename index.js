const http = require('http')

const apiKey = process.env.API_KEY
const url = `http://data.fixer.io/api/latest?access_key=${apiKey}&symbols=USD,EUR,RUB`
console.log(apiKey)

http.get(url, (response) => {
    const { statusCode } = response

    if (statusCode !== 200) {
        console.log(`Something wrong happened: ${statusCode}`)
        return
    }

    response.setEncoding('utf8')
    let accData = ''
    response.on('data', (chunkData) => {
        accData += chunkData
    })
    response.on('end', () => {
        console.log(JSON.parse(accData))
    })
}).on('error', (error) => { console.log(error) })