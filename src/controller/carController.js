const { addCarService, getAllCarService, getCarByIdService, updateCarService, deleteCarService } = require("../services/carService");

const addCarController = async (request, response) => {
    const addCar = await addCarService(request);
    response.json(addCar);
};

const getAllCarController = async (request, response) => {
    const allCars = await getAllCarService();
    response.json(allCars)
}

const getCarByIdController = async (request, response) => {
    const carById = await getCarByIdService(request);
    response.json(carById)
}
const updateCarController = async (request, response) => {
    const updateCar = await updateCarService(request);
    response.json(updateCar);
};
const deleteCarController = async (request, response) => {
    const deleteCar = await deleteCarService(request);
    response.json(deleteCar);
};
deleteCarController
module.exports = {deleteCarController, addCarController, getAllCarController, getCarByIdController, updateCarController};