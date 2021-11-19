const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter name of workout"
    },
    duration: {
        type: Number,
        required: "Enter the length of time for the workout"
    },
    distance: {
        type: Number,
        required: "Enter the distance for workout"
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;