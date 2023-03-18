const checkCarTypes = (request, response, next) => {
    const car = request.body;
    const arrayOfValidations = [];
    if(typeof car.brand !== "string") { arrayOfValidations.push("Brand debe ser string")}
    if(typeof car.price !== "number") { arrayOfValidations.push("Price debe ser number")}
    if(typeof car.model !== "string") { arrayOfValidations.push("Model debe ser string")}
    if(typeof car.year !== "number") { arrayOfValidations.push("Year debe ser number")}
    if(arrayOfValidations.length > 0) return response.json({statusCode: 400, message: "Revisa el objeto que mandas", arrayOfValidations})
    next();
}

module.exports = checkCarTypes;