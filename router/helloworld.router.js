import * as express from 'express';

export const HelloworldRouter = () => {
    const router = express.Router();

    router.get('/', async (req, res) => {
        res.json({
            status: 200,
            data: 'Hello world!'
        })
    })
    
    return router
}