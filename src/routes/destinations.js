let { Router } = require('express');
let router = Router();

const DESTINATIONS = require('../data/destinations');

router.get('/', (req,res)=>{
    res.json(DESTINATIONS);
});

router.get('/:id', (req,res)=>{
    let id = req.params.id;
    let destination = DESTINATIONSS.filter(d=>d.id==id)[0];
    if (destination) {
        res.status(200).json(destination);    
    } else {
        res.status(404).json({
            error: "Not found the destination with id="+id
        });
    }
});


module.exports = router;