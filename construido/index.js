const parser = require('./gramatica/gramatica')
const express = require('express')

const app = express()

app.use(express.json())

const PORT = 3000

app.post('/', (req, res) => {
    const contenido = req.body.codigo
    const resultado = parser.parse(contenido)
    console.log(resultado)
    try {
        console.log(resultado.ejecutar())
    } catch (error) {
        console.log(error)
    }
    return res.send(JSON.stringify(resultado))
})


app.listen(PORT, () => console.log('Server running on port: ' + PORT))