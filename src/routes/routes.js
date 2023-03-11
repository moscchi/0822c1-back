const express = require('express');
const addCarController = require('../controller/carController');
const router = express.Router();

router.get('/car', getAllCarController);
router.get('/car/:id', getCarByIdController);
router.update('/car/:id', updateCarController);
router.post('/car', addCarController);
router.delete('/car/:id', deleteCarController);



module.exports = router;