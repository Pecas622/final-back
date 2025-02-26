<<<<<<< HEAD
import { Schema, model } from "mongoose"

const productsCollections = 'products'

const productsSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    category: String,
    stock: {
        type: Number,
        
    },
    price: Number
})

export const productModel = model(productsCollections, productsSchema)
=======
// src/models/products.models.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
>>>>>>> 8559b5d (Correccion del cart)
