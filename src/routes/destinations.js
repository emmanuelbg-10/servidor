import { Router } from 'express';
import destinations from '../data/destinations.json' assert { type: 'json' }; // Cargar JSON correctamente en ES Modules

const router = Router();

router.get('/', (req, res) => {
    res.json(destinations);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const destination = destinations.find(d => d.id == id);

    if (destination) {
        res.status(200).json(destination);
    } else {
        res.status(404).json({ error: `Not found the destination with id=${id}` });
    }
});

export default router;
