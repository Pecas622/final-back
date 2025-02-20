import { Schema, model } from "mongoose"

const collections = 'users'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true 
    },
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

export const modelUser = model('users', userSchema)