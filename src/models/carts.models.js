import {Schema, model} from 'mongoose'

// node 22.13.0 por defecto de manera nativa el uso de modulos sin type module

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