const router = require ("express").Router();
const Workout = require("../models/workout");
// const { param } = require("./view");





router.post('/api/workouts', ({ body }, res) => {
    Workout.create({})
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);

    });
});

router.put("/api/workouts/:id", ({body,params},res)=> {
    Workout.findByIdAndUpdate(params.id, {$push:{exercises:body}},{new:true, runValidators:true})
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);

    });
});
router.get('/api/workouts',(req, res) => {
	Workout.aggregate([
        {
            $addFields:{
                totalDuration:{
                    $sum:"$exercises.duration"
                },
            },
        },
    ]).then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);

    });
});
router.get('/api/workouts/range', (req, res) => {
	Workout.aggregate([
        {
            $addFields:{
                totalDuration:{
                    $sum:"$exercises.duration"
                },
            },
        },
    ])
        .sort({_id:-1}).limit(7)
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		// if there is an error, display error
		.catch((err) => {
			res.status(400).json(err);
			console.log(err);
		});
});

// POST STATS
router.post('/api/workouts/range', (req, res) => {
	Workout.create({})
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		// if there is an error, display error
		.catch((err) => {
			res.status(400).json(err);
			console.log(err);
		});
});

module.exports=router