import { Router } from 'express'
import { cartsModel } from '../../models/carts.models.js'

const router = Router()

router.post('/', async (req, res) => {
    const result = await cartsModel.create({products: [{product: '678fafd5b3fbd94b2629bbdf'}, {product: '678fafe2b3fbd94b2629bbe5'}]})
    res.send(result)
})
router.get('/', async (req, res) => {
    const carts = await cartsModel.find({})
    res.send(carts)
})
router.get('/:cid', async (req, res) => {
    const { cid } = req.params
    const cart = await cartsModel.findOne({_id: cid})
    res.send(cart)
})

export default router