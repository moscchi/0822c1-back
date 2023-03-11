const addCarService = require("../services/carService");

const addCarController = async (request, response) => {
    const addCar = await addCarService(request);
    response.json(addCar);
};

module.exports = addCarController;