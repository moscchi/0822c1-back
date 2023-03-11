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

module.exports = addCarService;