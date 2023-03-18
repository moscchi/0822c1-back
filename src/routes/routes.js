const express = require('express');
const {addCarController, getAllCarController, getCarByIdController, updateCarController, deleteCarController} = require('../controller/carController');
const checkCarTypes = require('../utils/checkCarTypesmiddleware');

const router = express.Router();

router.post('/car', checkCarTypes, addCarController);
router.get('/car', getAllCarController);
router.get('/car/:id', getCarByIdController);
router.put('/car/:id', updateCarController);
router.delete('/car/:id', deleteCarController);

module.exports = router;