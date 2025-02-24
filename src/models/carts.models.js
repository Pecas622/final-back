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