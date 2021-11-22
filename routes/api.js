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

router.put("/api/workouts/:id", ({body}, res) => {
    db.workouts.update({}, {set: {body}})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


router.get("/api/workouts", (req, res) => {
    Workouts.find({})
        .sort({ date: -1 })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
    })
        .catch(err => {
            res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({body},res) => {
    Workouts.insertMany(body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
