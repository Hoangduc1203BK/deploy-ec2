import * as express from 'express';

export const HelloworldRouter = () => {
    const router = express.Router();

    router.get('/', async (req, res) => {
        res.json({
            status: 200,
            data: {
                id: 123,
                data: [1,2,3,4,5]
            }
        })
    })
    
    return router
}