import { Router } from 'express';
import { cartsModel } from '../../models/carts.models.js';

const router = Router();

// Crear un nuevo carrito
router.post('/', async (req, res) => {
    try {
        const { products } = req.body;

        if (!products || !Array.isArray(products)) {
            return res.status(400).json({ error: 'El campo "products" es obligatorio y debe ser un array.' });
        }

        const newCart = await cartsModel.create({ products });
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el carrito', details: error.message });
    }
});

// Obtener todos los carritos
router.get('/', async (req, res) => {
    try {
        const carts = await cartsModel.find({});
        res.json(carts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los carritos', details: error.message });
    }
});

// Obtener un carrito por ID
router.get('/:cid', async (req, res) => {
    try {
        const { cid } = req.params;
        const cart = await cartsModel.findById(cid);

        if (!cart) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el carrito', details: error.message });
    }
});

export default router;
