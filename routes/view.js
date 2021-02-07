const router = require ("express").Router();
const path = require ("path");

router.get("./api/workouts",function(req, res){
res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/stats",function(req, res){
res.sendFile(path.join(__dirname, "../public/stats.html"))
})
router.get("/excersise",function(req, res){
res.sendFile(path.join(__dirname, "../public/excersise.html"))
});

router.post('/api/workouts', ({ body }, res) => {
    workoutNames.create(body)
    .then((data) => {
        res.json(data);
    })
    catch((err) => {
        res.status(400).json(err);

    });
});

router.get('/api/workouts/range', (req, res) => {
	Workout.find()
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

            
module.exports=router;