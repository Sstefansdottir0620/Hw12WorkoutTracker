const db = require("../models");
const mongojs = require("mongojs");


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
  
  app.post("/api/workouts", ({ body }, res) => {
    db.workout.create(body)
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
  
  
  
  
  app.put("/api/workouts/:id", (req, res) => {
    // 
    db.workout.update({_id: mongojs.ObjectId(req.params.id)}, { $push: { exercises: req.body }})

    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

    

  });

  

};
  


// app.post("/submit", ({ body }, res) => {
//   db.Note.create(body)
//     .then(({ _id }) => db.workout.findOneAndUpdate({params.id}, { $push: { notes: _id } }, { new: true }))
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });