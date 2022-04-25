const parser = require('./gramatica/gramatica')
const express = require('express')
const {ambito} = require('./gramatica/simbolo/ambito')
const cors=require('cors')
const { Print } = require('./gramatica/instrucciones/print')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000

app.post('/api', (req, res) => {
    const contenido = req.body.codigo
    console.log(req.body)
    console.log("------------")
    const resultado = parser.parse(contenido)
    try {
        const global = new ambito(null)
        for (const iterar of resultado) {
            iterar.ejecutar(global)
        }
        
    } catch (error) {
        console.log(error)
    }
    const respuesta = {"result":Print.consola};
    Print.consola="";
    return res.send(JSON.stringify(respuesta))
})


app.listen(PORT, () => console.log('Server running on port: ' + PORT))