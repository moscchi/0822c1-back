const CarModel = require("../models/car.models");

const addCarService = async (request) => {
  try {
    const car = request.body;
    //Agrega la logica para saber si el auto es nuevo.
    if(!car.hasOwnProperty('isNewCar')){
        const date = new Date();
        if(car.year === date.getFullYear()){
            car.isNewCar = true
        }
    }
    // Aca abajo, instanciamos un documento, es decir, el objeto de mongo y le asignamos el valor del objeto que me entra en request
    const newCar = new CarModel(car);
    await newCar.save();
    return { message: "Auto agregado con exito", statusCode: 201 };
  } catch (error) {
    return { message: "Ocurrio un error", statusCode: 400 }
  }
};

const getAllCarService = async () => {
  const allCars = await CarModel.find();
  return allCars;
}

const getCarByIdService = async (request) => {
  const { id } = request.params;
  const carById = await CarModel.findById(id)
  if(!carById) {
    return {statusCode: 404, message: "Car not found"}
  }
  return carById;
}

const updateCarService = async (request) => {
try {
  const { id } = request.params;
  const updateCar = request.body;
  const carDatabase = await CarModel.findById(id);
  if(!carDatabase) {
    return {statusCode: 404, message: "Car not found"}
  }
  carDatabase.brand = updateCar.brand
  carDatabase.model = updateCar.model
  carDatabase.price = updateCar.price
  carDatabase.year = updateCar.year
  carDatabase.isNewCar = updateCar.hasOwnProperty('isNewCar') ? updateCar.isNewCar : carDatabase.isNewCar;
  await carDatabase.save();
  return { message: "Auto Actualizado"}
} catch (error) {
  console.log(error);
  return { message: "Ocurrio un error"}
}
}
const deleteCarService = async (request) => {
  try {
    const { id } = request.params;
  const deleteCar = await CarModel.deleteOne({_id: id})
  if(deleteCar.deletedCount === 0) {
    return {statusCode: 404, message: "Car not found"}
  }

  return deleteCar;
  } catch (error) {
    console.log(error);
    return {message: "Ocurrio un error"};
  }
}

module.exports = {addCarService, getAllCarService, getCarByIdService, updateCarService, deleteCarService};