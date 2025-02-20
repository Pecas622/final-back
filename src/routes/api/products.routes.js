import { Router } from 'express'
import { productModel } from '../../models/products.models.js'

const router = Router()

router.post('/', async (req, res) => {
    const result = await productModel.create({
        title: "product 1",
        category: 'remeras',
        price: 5000,
        stock: 100
    })
    res.send(result)
})
router.get('/', async (req, res) => {
    const products = await productModel.find({})
    res.send(products)
})

export default router