const parser = require('./gramatica/gramatica')
const express = require('express')
const {ambito} = require('./gramatica/simbolo/ambito')

const app = express()

app.use(express.json())

const PORT = 3000

app.post('/', (req, res) => {
    const contenido = req.body.codigo
    const resultado = parser.parse(contenido)
    try {
        const global = new ambito(null)
        for (const iterar of resultado) {
            iterar.ejecutar(global)
        }
        
    } catch (error) {
        console.log(error)
    }
    return res.send(JSON.stringify(resultado))
})


app.listen(PORT, () => console.log('Server running on port: ' + PORT))