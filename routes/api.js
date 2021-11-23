const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({params, body}) => {
    Workout.findByIdAndUpdate(params.id, {$push: {exercise: body}})
        .then(dbWorkout => {
            res.send(dbWorkout);
        })
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({body}, res) =>{
    Workout.insertMany(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
    });
});


module.exports = router;
