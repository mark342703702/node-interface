const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('s')
})

app.listen(3000, () => {
    console.log(`程序运行在端口3000`)
})
