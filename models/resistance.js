const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
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
    weight: {
        type: Number,
        required: "Enter the amount of weight"
    },
    reps: {
        type: Number,
        required: "Enter the amount of reps"
    },
    sets: {
        type: Number,
        required: "Enter the amount of sets"
    }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;