const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
        required: "Enter the distance of the workout"
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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;