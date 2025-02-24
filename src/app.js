import express from 'express';
import handlebars from 'express-handlebars';
import routerApp from './routes/index.js';
import { connectDB } from './config/index.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('views', './src/views');
app.set('view engine', 'hbs');

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use(routerApp);

app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts'); 
});
