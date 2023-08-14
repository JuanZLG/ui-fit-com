const express = require('express')
const app = express()

//Configuración
app.set('port', 3000)

app.listen(app.get('port'), ()=> {
    console.log(`Aplicación funcionando en puerto ${app.get('port')}.`)
})