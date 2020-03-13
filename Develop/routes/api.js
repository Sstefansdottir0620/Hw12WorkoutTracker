const db = require("../models");
const mongo = require("mongojs");

app.get("/api/workouts", (req, res) => {
    db.workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  
  app.post("/api/workout", ({ body }, res) => {
    db.workout.create(body)
      .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { exersizes: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.put("/api/workout/:id", ({body}, res) => {
    // 
    db.workout.update({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

    //

  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  