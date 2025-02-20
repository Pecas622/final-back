import { Router } from 'express'
import { modelUser } from '../../models/users.model.js'

const router = Router()

router.get('/', async (req, res) => { // 5001 /limit 
    try {
        const { limit=10, numPage=2 } = req.query
        // const users = await modelUser.find({first_name: 'Celia'}).explain('executionStats')
        // const users = await modelUser.find().lean() // parsear de mongo object a js
        const {
            docs,
            page,
            totalPages,
            hasPrevPage,
            hasNextPage
        } = await modelUser.paginate({}, {limit, page: numPage})
        console.log(docs)
        res.send({status: 'success', data: docs})        
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    const { first_name, last_name, email } = req.body
    // validaciones
    const result = await modelUser.create({
        first_name, 
        last_name, 
        email
    })     

    res.send({
        status: 'success',
        payload: result
    })
})
router.get('/:uid', async (req, res) => {
    const { uid } = req.params
    const user = await modelUser.findOne({_id: uid})
    res.send({status: 'success', data: user})
})
router.put('/:uid', async (req, res) => {
    res.send('update user')
})
router.delete('/:uid', async (req, res) => {
    res.send('delete user')
})

export default router