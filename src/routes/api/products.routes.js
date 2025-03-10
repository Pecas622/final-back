<<<<<<< HEAD
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
=======
// src/routes/products.routes.js

import express from 'express';
import Product from '../../models/products.models.js';

const router = express.Router();

// Ruta para crear un nuevo producto
router.post('/', async (req, res) => {
    try {
        const { title, price, stock, category } = req.body;

        if (!title || !price || !stock || !category) {
            return res.status(400).json({ message: 'Todos los campos son requeridos' });
        }

        const newProduct = new Product({
            title,
            price,
            stock,
            category
        });

        await newProduct.save();
        res.status(201).json(newProduct); // Devuelve el producto creado

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el producto' });
    }
});

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
});

// Ruta para obtener un producto por su ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el producto' });
>>>>>>> 8559b5d (Correccion del cart)
    }
});

export default router;
