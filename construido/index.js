const parser = require('./gramatica/gramatica')
const {graficarArbol} = require('./gramatica/graficar')
const {graficarTabla} = require('./gramatica/graficartabla')
const express = require('express')
const {ambito} = require('./gramatica/simbolo/ambito')
const cors=require('cors')
const { Print } = require('./gramatica/instrucciones/print')
const  {NodoAst} = require('./gramatica/simbolo/NodoAst')

const app = express()
const dot=""

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

app.post('/ast', (req, res) => {
    const contenido = req.body.codigo
    console.log(req.body)
    console.log("------------")
    const resultado = parser.parse(contenido)
    let respuesta =""
    try {

        let init = new NodoAst('INIT')
        let instrucciones = new NodoAst('INSTRUCCIONES')
        for (const iterar of resultado) {
            instrucciones.agregarHijoAST(iterar.getNodo())
        }
        init.agregarHijoAST(instrucciones)
        graficarTabla()
        respuesta = {"result":graficarArbol(init)};
    } catch (error) {
        console.log(error)
    }
    
    return res.send(JSON.stringify(respuesta))
})


app.listen(PORT, () => console.log('Server running on port: ' + PORT))