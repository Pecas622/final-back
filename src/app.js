import express from 'express';
import handlebars from 'express-handlebars';
import routerApp from './routes/index.js';
import { connectDB } from './config/index.js';

const app = express();
const PORT = process.env.PORT || 8080; // Corrección del operador OR

// Habilitar archivos estáticos
app.use(express.static('src/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Handlebars
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('views', './src/views');
app.set('view engine', 'hbs');

// Conectar a la base de datos
connectDB();

// Usar las rutas generales
app.use(routerApp);

// ✅ Agregar la ruta para /realtimeproducts
app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts'); // Asegúrate de que la vista existe en src/views/realTimeProducts.hbs
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
