const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({params, body}, res) => {
    Workout.findByIdAndUpdate(params.id, {$push: {exercise: body}}, {new: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([ { $addFields: {
        totalDuration: { 
            $sum: "$exercises.duration"}
    }},
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({body}, res) =>{
    Workout.aggregate([ { $addFields: {
        totalDuration: {
            $sum: "$exercises.duration"
        }
    }},
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;
