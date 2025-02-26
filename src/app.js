import express from 'express';
import handlebars from 'express-handlebars';
import routerApp from './routes/index.js';
import { connectDB } from './config/index.js';

const app = express();
const PORT = process.env.PORT || 8080;

<<<<<<< HEAD
app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

=======
// 🔹 Conectar a MongoDB con manejo de errores
connectDB().catch(error => {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); // Detener la app si la DB falla
});

// 🔹 Configuración de Handlebars
>>>>>>> 8559b5d (Correccion del cart)
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('views', './src/views');
app.set('view engine', 'hbs');

<<<<<<< HEAD
connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use(routerApp);

app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts'); 
=======
// 🔹 Middlewares
app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 Rutas principales
app.use(routerApp);

// 🔹 Ruta para RealTimeProducts
app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts');
});

// 🔹 Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
>>>>>>> 8559b5d (Correccion del cart)
});
