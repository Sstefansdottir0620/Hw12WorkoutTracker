const db = require("../models");


module.exports = function(app) {

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
  
  
  app.post("/api/workouts", ({ body }, res) => {
    db.workout.create(body)
      .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.put("/api/workouts/:id", ({body}, res) => {
    // 
    db.workout.update({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

    

  });
  

};
  