import { Router } from 'express';
import { modelUser } from '../../models/users.model.js';

const router = Router();

router.get('/', async (req, res) => { 
    try {
        const { limit = 10, numPage = 1 } = req.query; // Página 1 por defecto
        const {
            docs,
            page,
            totalPages,
            hasPrevPage,
            hasNextPage
        } = await modelUser.paginate({}, { limit, page: numPage, lean: true });

        res.send({
            status: 'success',
            data: docs,
            page,
            totalPages,
            hasPrevPage,
            hasNextPage
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'error', message: 'Internal Server Error' });
    }
});

export default router;
