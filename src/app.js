import express from 'express'
// import { server as ServerIo } from 'socket.io'
// import { server as ServerHttp } from 'http'
import handlebars from 'express-handlebars'
import routerApp from './routes/index.js'
import { connectDB } from './config/index.js'

const app  = express()
const PORT = 8080 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('views', './src/views')
app.set('view engine', 'hbs')

connectDB()

app.use(routerApp)

app.listen(PORT, ()=>{
    console.log(`server en puerto ${PORT}`)
})




