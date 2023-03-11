const { Schema, model } = require("mongoose");

const CarSchema = Schema({
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    isNewCar: {
        type: Boolean,
        default: false
    }
});

const CarModel = model("Car", CarSchema);

module.exports = CarModel;