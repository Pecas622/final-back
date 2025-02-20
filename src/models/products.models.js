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