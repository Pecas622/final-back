<<<<<<< HEAD
import {Schema, model} from 'mongoose'


const cartSchema = new Schema({
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            },
            // quantity: Number
        }]
    }
})

// [
    // cart: { products: [{proudctID: id, quantity}, {proudct: id}, {proudct: id}]}
    // cart: { products: [{proudctID: id}, {proudct: id}, {proudct: id}]}
    // cart: { products: [{proudct: id}, {proudct: id}, {proudct: id}]}
// ]

cartSchema.pre('findOne', function () {
    this.populate('products.product')
})

export const cartsModel = model('carts', cartSchema)
=======
// src/models/carts.model.js
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', // Referencia al modelo de Producto
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }]
});

const cartsModel = mongoose.model('Cart', cartSchema);

export { cartsModel };
>>>>>>> 8559b5d (Correccion del cart)
