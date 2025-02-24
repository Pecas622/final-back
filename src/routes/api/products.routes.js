import { Router } from 'express';
import { productModel } from '../../models/products.models.js';

const router = Router();


router.post('/', async (req, res) => {
    try {
        const { title, category, price, stock } = req.body;


        if (!title || !category || !price || !stock) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        if (typeof price !== 'number' || price <= 0) {
            return res.status(400).json({ error: 'El precio debe ser un número positivo' });
        }
        if (typeof stock !== 'number' || stock < 0) {
            return res.status(400).json({ error: 'El stock debe ser un número no negativo' });
        }

        const newProduct = await productModel.create({ title, category, price, stock });

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto', details: error.message });
    }
});

// Obtener todos los productos (mates)
router.get('/', async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos', details: error.message });
    }
});

export default router;
